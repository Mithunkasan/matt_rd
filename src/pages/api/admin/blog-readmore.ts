import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { query, title } = req.body
  if (!query) return res.status(400).json({ error: 'Query is required.' })

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are an expert researcher and content writer. Return ONLY valid JSON — no markdown fences, no extra text.`,
        },
        {
          role: 'user',
          content: `Write an in-depth "Read More" extension for a blog post titled "${title}" about the topic: "${query}".

Return ONLY this JSON structure:
{
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
    { "title": "Recommended resource or book title 2", "description": "One sentence about why to read it" },
    { "title": "Recommended resource or book title 3", "description": "One sentence about why to read it" }
  ]
}`,
        },
      ],
      temperature: 0.75,
      max_tokens: 1500,
    })

    const raw = (chat.choices[0].message.content || '{}')
      .replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()

    const content = JSON.parse(raw)
    return res.status(200).json({ success: true, content })
  } catch (err: any) {
    console.error('[blog-readmore]', err)
    return res.status(500).json({ error: err.message || 'Failed to load more content.' })
  }
}
