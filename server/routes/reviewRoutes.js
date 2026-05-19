import express from 'express'
import {parsePrUrl} from '../utils/parsePrUrl.js'
import { createFakeReview } from '../services/reviewService.js'
import { getPullRequest, getPullRequestFiles } from '../services/githubService.js'
import { formatPullRequestDiff } from '../services/diffFormatter.js'

const router = express.Router()

router.post('/review', async (req, res) => {
  const { prUrl } = req.body
  const parsedPr = parsePrUrl(prUrl)

  if (!parsedPr) {
    return res.status(400).json({
      error: 'PR URL is required',
    })
  }
  try{
    const githubPr = await getPullRequest(
      parsedPr.owner, 
      parsedPr.repo, 
      parsedPr.pullNumber
    )
    console.log(githubPr.title)

    const githubFiles = await getPullRequestFiles(
    parsedPr.owner,
    parsedPr.repo,
    parsedPr.pullNumber
    )

    const formattedDiff = formatPullRequestDiff(githubFiles)
    console.log(formattedDiff.slice(0,1000))

    const reviewData = createFakeReview(prUrl, parsedPr, githubPr, githubFiles)
    res.json(reviewData)

  } catch (error){
    console.error(error)

    res.status(500).json({
      error: 'Unable to fetch pull request'
    })
  }

  

  
})

export default router