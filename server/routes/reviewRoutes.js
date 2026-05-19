import express from 'express'
import {parsePrUrl} from '../utils/parsePrUrl.js'
import { createFakeReview } from '../services/reviewService.js'

const router = express.Router()

router.post('/review', (req, res) => {
  const { prUrl } = req.body
  const parsedPr = parsePrUrl(prUrl)

  if (!parsedPr) {
    return res.status(400).json({
      error: 'PR URL is required',
    })
  }

  const reviewData = createFakeReview(prUrl, parsedPr)

  res.json(reviewData)
})

export default router