import dotenv from 'dotenv'
import Groq from 'groq-sdk'

dotenv.config()

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function generateAiReview(formattedDiff) {
  const prompt = `
You are a senior software engineer reviewing a GitHub pull request.

Analyze the diff below and return ONLY valid JSON.

The JSON must have this shape:
{
  "summary": "string",
  "riskLevel": "low" | "medium" | "high",
  "verdict": "approve" | "comment" | "request_changes",
  "potentialBugs": [
    {
      "file": "string",
      "issue": "string",
      "severity": "low" | "medium" | "high",
      "suggestion": "string"
    }
  ],
  "edgeCases": [
    {
      "case": "string",
      "recommendation": "string"
    }
  ],
  "styleIssues": [
    {
      "file": "string",
      "issue": "string",
      "suggestion": "string"
    }
  ]
}

Rules:
- Return only JSON.
- Do not wrap the JSON in markdown.
- Do not invent files that are not in the diff.
- If there are no findings for a category, return an empty array.
- Keep the review concise and practical.
- Use request_changes only for likely bugs, security issues, or broken behavior.
- Use comment for minor concerns or unclear risks.
- Use approve only if the diff appears safe.

Diff:
${formattedDiff}
`

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.2,
    })

    const text = completion.choices[0].message.content

    return JSON.parse(text)
  } catch (error) {
    console.error('AI review failed:', error.message)

    return {
      summary:
        'AI review is unavailable right now. PullPilot fetched the GitHub PR metadata and changed files successfully, but the AI review could not be generated.',
      riskLevel: 'medium',
      verdict: 'comment',
      potentialBugs: [],
      edgeCases: [],
      styleIssues: [],
    }
  }
}