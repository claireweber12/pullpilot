import dotenv from 'dotenv'
import OpenAI from 'openai'


dotenv.config()
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})



export async function generateAiReview(formattedDiff) {
  console.log('Diff being sent to AI:')
  console.log(formattedDiff.slice(0, 500))

  return {
    summary:
      'Temporary AI placeholder: this will soon be generated from the PR diff.',
    riskLevel: 'medium',
    verdict: 'comment',
    potentialBugs: [],
    edgeCases: [],
    styleIssues: [],
  }
}