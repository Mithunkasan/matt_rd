import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prisma } = await import('../../../lib/prisma')
    
    // Fetch from Prisma
    const dbBlogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    
    // Parse the JSON content
    const parsedBlogs = dbBlogs.map(dbBlog => {
      try {
        return JSON.parse(dbBlog.content)
      } catch (e) {
        return null
      }
    }).filter(blog => blog !== null)

    const blogs = parsedBlogs

    // Sort by newest first based on generatedAt
    blogs.sort((a: any, b: any) => new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime())

    return res.status(200).json({ blogs })
  } catch (error: any) {
    console.error('Error fetching admin blogs:', error)
    return res.status(500).json({ error: 'Failed to fetch blogs' })
  }
}
