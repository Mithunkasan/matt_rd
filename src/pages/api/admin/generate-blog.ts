import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { query } = req.body
  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return res.status(400).json({ error: 'A search query is required.' })
  }

  try {
    // ── 1. Generate rich blog article ──────────────────────────────────────────
    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a senior research writer and content strategist for Matt Engineering Solutions, 
a professional academic & research consultancy. You write comprehensive, magazine-quality blog posts 
that are deeply informative, well-structured, and authoritative.
Always return valid JSON only — no markdown fences, no extra text whatsoever.`,
        },
        {
          role: 'user',
          content: `Write a comprehensive, in-depth, and 100% SEO optimized blog post about: "${query}". Ensure the content follows all SEO best practices including keyword optimization, clear headings, and high readability.

The post must be long, rich and detailed. Return ONLY a JSON object with this exact structure:
{
  "title": "Compelling, SEO-optimised blog post title",
  "subtitle": "One engaging sentence that expands on the title",
  "category": "Relevant category tag (e.g. Research, Technology, Healthcare, Education)",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "readTime": "X min read",
  "introduction": "3-4 engaging sentences that hook the reader and outline what they will learn",

  "overview": {
    "heading": "Understanding [topic]: An Overview",
    "content": "2-3 detailed paragraphs giving background, context and importance of this topic"
  },

  "sections": [
    {
      "heading": "Specific aspect or subtopic heading",
      "content": "3-4 rich paragraphs covering this subtopic in detail with examples and data"
    }
  ],

  "keyPoints": [
    { "point": "Key point title", "description": "2-3 sentence explanation of this key point" }
  ],

  "challenges": [
    { "title": "Challenge name", "description": "Explanation of this challenge and its impact" }
  ],

  "bestPractices": [
    { "title": "Best practice name", "description": "How to implement this best practice" }
  ],

  "expertInsight": "A 3-4 sentence deep expert analysis or opinion paragraph on this topic",
  "didYouKnow": [
    "Surprising statistic or fact 1",
    "Surprising statistic or fact 2",
    "Surprising statistic or fact 3",
    "Surprising statistic or fact 4"
  ],
  "caseStudy": {
    "title": "Real or illustrative case study title",
    "body": "3-4 sentence case study description showing the topic in action"
  },
  "faq": [
    { "q": "Question 1 about the topic?", "a": "Detailed answer 1" },
    { "q": "Question 2 about the topic?", "a": "Detailed answer 2" },
    { "q": "Question 3 about the topic?", "a": "Detailed answer 3" }
  ],
  "furtherReading": [
    { "title": "Recommended resource or book title 1", "description": "One sentence about why to read it" },
    { "title": "Recommended resource or book title 2", "description": "One sentence about why to read it" }
  ],

  "conclusion": "3-4 sentence strong conclusion that summarises insights and calls the reader to action"
}

Rules:
- sections array must have at least 4 entries, each with 3-4 paragraphs of content
- keyPoints must have at least 5 entries
- challenges must have at least 4 entries  
- bestPractices must have at least 4 entries
- faq must have at least 3 entries`,
        },
      ],
      temperature: 0.8,
      max_tokens: 4500,
    })

    const rawText = chatResponse.choices[0].message.content || '{}'
    const clean = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    const blogData: any = JSON.parse(clean)

    blogData.seoText = "The Best PhD Service in Nagercoil"

    // ── 2. Build image prompt from title + query (no extra tokens) ───────────
    const imagePrompt = [
      `Photorealistic professional featured blog image about: "${blogData.title || query}".`,
      `Category: ${blogData.category || 'Technology'}.`,
      'Style: cinematic lighting, modern composition, vibrant colors, sharp focus.',
      'No text, no logos, no watermarks. 16:9 widescreen format.',
    ].join(' ')

    const imageResponse = await openai.images.generate({
      model: 'dall-e-3',
      prompt: imagePrompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
    })

    let imageUrl = ''

    if (imageResponse?.data?.[0]?.url) {
      try {
        const imgRes = await fetch(imageResponse.data[0].url)
        const arrayBuffer = await imgRes.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        
        const fileName = `blog-${crypto.randomUUID()}.png`
        
        // Upload to Vercel Blob
        const { put } = await import('@vercel/blob')
        const blob = await put(`blogs/${fileName}`, buffer, {
          access: 'public',
          token: process.env.BLOB_READ_WRITE_TOKEN,
        })
        
        imageUrl = blob.url
      } catch (err) {
        console.error('Failed to upload image to Vercel Blob:', err)
      }
    }

    const newBlog = {
      id: crypto.randomUUID(),
      status: 'draft',
      title: blogData.title,
      subtitle: blogData.subtitle,
      category: blogData.category,
      tags: blogData.tags || [],
      readTime: blogData.readTime,
      introduction: blogData.introduction,
      overview: blogData.overview || null,
      sections: blogData.sections || [],
      keyPoints: blogData.keyPoints || [],
      challenges: blogData.challenges || [],
      bestPractices: blogData.bestPractices || [],
      expertInsight: blogData.expertInsight || null,
      didYouKnow: blogData.didYouKnow || [],
      caseStudy: blogData.caseStudy || null,
      faq: blogData.faq || [],
      furtherReading: blogData.furtherReading || [],
      conclusion: blogData.conclusion,
      seoText: blogData.seoText,
      imageUrl,
      query,
      generatedAt: new Date().toISOString(),
    }

    // Save to Prisma
    try {
      const { prisma } = await import('../../../lib/prisma')
      await prisma.blog.create({
        data: {
          id: newBlog.id,
          title: newBlog.title,
          imageUrl: newBlog.imageUrl,
          published: false,
          content: JSON.stringify(newBlog)
        }
      })
    } catch (dbError) {
      console.error('Error saving blog to database:', dbError)
    }

    return res.status(200).json({
      success: true,
      blog: newBlog,
    })
  } catch (err: any) {
    console.error('[generate-blog]', err)
    return res.status(500).json({ error: err.message || 'Failed to generate blog content.' })
  }
}
