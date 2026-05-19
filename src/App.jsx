import './App.css'
import {useState} from 'react'
import Hero from './components/Hero'
import ReviewResults from './components/ReviewResults'
import {analyzePr} from './services/reviewService'

function App() {
  const [reviewData, setReviewData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  async function handleAnalyze(prUrl) {
    setIsLoading(true)
    setReviewData(null)

    try{
      const data = await analyzePr(prUrl)
      setReviewData(data)
    } catch (error){
      console.error(error)
    } finally{
      setIsLoading(false)
    }
  }
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <Hero onAnalyze={handleAnalyze} />
      {reviewData && <ReviewResults data={reviewData} />}
    </main>
  )
}

export default App