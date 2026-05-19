import express from 'express'
import { createFakeReview } from '../services/reviewService.js'

const router = express.Router()

router.post('/review', (req, res) => {
  const { prUrl } = req.body

  if (!prUrl) {
    return res.status(400).json({
      error: 'PR URL is required',
    })
  }

  const reviewData = createFakeReview(prUrl)

  res.json(reviewData)
})

export default router