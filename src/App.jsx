import './App.css'
import {useState} from 'react'
import Hero from './components/Hero'
import ReviewResults from './components/ReviewResults'

function App() {
  const [reviewData, setReviewData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  function handleAnalyze(parsedPr) {
    setIsLoading(true)
    setReviewData(null)

    setTimeout(() => {
      setReviewData({
        pr: {
          title: 'Add authentication flow',
          author: 'octocat',
          filesChanged: 4,
          additions: 128,
          deletions: 32,
        },
        review: {
          summary:
            'This PR adds a basic authentication flow, including login form handling, protected routes, and token storage.',
          riskLevel: 'medium',
          verdict: 'request_changes',
          potentialBugs: [],
          edgeCases: [
            {
              case: 'Missing or malformed token',
              recommendation: 'Handle invalid token parsing and clear the stored session.',
            },
          ],
          styleIssues: [
            {
              file: 'src/components/Login.jsx',
              issue: 'Validation logic is repeated inside the submit handler.',
              suggestion: 'Move validation into a helper function for readability.',
            },
          ],
        },
      })

      setIsLoading(false)
    }, 1000)
  }
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <Hero onAnalyze={handleAnalyze} />
      {reviewData && <ReviewResults data={reviewData} />}
    </main>
  )
}

export default App