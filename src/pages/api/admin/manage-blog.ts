import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { id, action, publishedAt } = req.body

  if (!id || !action) {
    return res.status(400).json({ error: 'Missing blog id or action' })
  }

  try {
    const { prisma } = await import('../../../lib/prisma')
    
    const dbBlog = await prisma.blog.findUnique({
      where: { id: id as string }
    })
    
    if (!dbBlog) {
      return res.status(404).json({ error: 'Blog not found' })
    }

    if (action === 'delete') {
      await prisma.blog.delete({
        where: { id: id as string }
      })
      return res.status(200).json({ success: true, status: action, blog: null })
    }
    
    // Parse the existing content to update status properties
    let parsedContent: any = {}
    try {
      parsedContent = JSON.parse(dbBlog.content)
    } catch (e) {
      // Fallback
    }
    
    let published = dbBlog.published

    if (action === 'post') {
      parsedContent.status = 'published'
      parsedContent.publishedAt = new Date().toISOString()
      published = true
    } else if (action === 'schedule') {
      if (!publishedAt) {
        return res.status(400).json({ error: 'Missing scheduled date' })
      }
      parsedContent.status = 'scheduled'
      parsedContent.publishedAt = new Date(publishedAt).toISOString()
      published = false
    } else if (action === 'unpublish') {
      parsedContent.status = 'draft'
      delete parsedContent.publishedAt
      published = false
    } else {
      return res.status(400).json({ error: 'Invalid action' })
    }

    // Save updated content back to Prisma
    await prisma.blog.update({
      where: { id: id as string },
      data: {
        published,
        content: JSON.stringify(parsedContent)
      }
    })

    return res.status(200).json({ success: true, status: action, blog: parsedContent })
  } catch (error: any) {
    console.error('Error managing blog:', error)
    return res.status(500).json({ error: 'Failed to update blog' })
  }
}
