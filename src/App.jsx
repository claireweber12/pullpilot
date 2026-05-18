import './App.css'
import {useState} from 'react'
import Hero from './components/Hero'
import ReviewResults from './components/ReviewResults'

function App() {
  const [reviewData, setReviewData] = useState(null)
  function handleAnalyze(parsedPr){
    console.log('Analyze this PR:', parsedPr)
    setReviewData({
      pr:{
        title: 'Add auth workflow', 
        author: 'JohnDoe',
        filesChanged:4,
        additions:128,
        deletions:32,
      },
      review:{
        summary:
        'This PR adds a basic authentication flow, includinf login form handling, protected routes, and token storage.',
        riskLevel: 'medium',
        verdict: 'comment',
      },
    })
  }
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <Hero onAnalyze={handleAnalyze} />
      {reviewData && <ReviewResults data={reviewData} />}
    </main>
  )
}

export default App