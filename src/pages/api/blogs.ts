import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prisma } = await import('../../lib/prisma')
    
    // Fetch from Prisma
    const dbBlogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    
    // Parse the JSON content and filter
    const now = new Date().getTime()
    const parsedBlogs = dbBlogs.map(dbBlog => {
      try {
        return JSON.parse(dbBlog.content)
      } catch (e) {
        return null
      }
    }).filter(blog => blog !== null)
    
    const blogs = parsedBlogs.filter((blog: any) => {
      if (blog.status === 'published') return true
      if (blog.status === 'scheduled' && blog.publishedAt && new Date(blog.publishedAt).getTime() <= now) {
        return true
      }
      return false
    })

    // Sort by newest first
    blogs.sort((a: any, b: any) => {
      const aDate = a.publishedAt ? new Date(a.publishedAt) : new Date(a.generatedAt)
      const bDate = b.publishedAt ? new Date(b.publishedAt) : new Date(b.generatedAt)
      return bDate.getTime() - aDate.getTime()
    })

    return res.status(200).json({ blogs })
  } catch (error: any) {
    console.error('Error reading blogs:', error)
    return res.status(500).json({ error: 'Failed to fetch blogs' })
  }
}
