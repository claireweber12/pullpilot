import './App.css'
import {useState, useRef} from 'react'
import Hero from './components/Hero'
import ReviewResults from './components/ReviewResults'
import {analyzePr} from './services/reviewService'
import LoadingReview from './components/LoadingReview'
import HowItWorks from './components/HowItWorks'

function App() {
  const [reviewData, setReviewData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const abortControllerRef = useRef(null)

  async function handleAnalyze(prUrl) {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    const controller = new AbortController()
    abortControllerRef.current = controller

    setIsLoading(true)
    setReviewData(null)
    setError('')

    try{
      const data = await analyzePr(prUrl, controller.signal)
      setReviewData(data)
    } catch (error){
      if (error.name === 'AbortError') return
      console.error(error)
      setError(error.message)
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <Hero onAnalyze={handleAnalyze} />
      {!isLoading && !reviewData && !error && <HowItWorks />}
      {error && (
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}
      {isLoading && <LoadingReview />}
      
      {reviewData && <ReviewResults data={reviewData} />}
    </main>
  )
}

export default App