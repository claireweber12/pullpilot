const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050'
export async function analyzePr(prUrl, signal) {
  const response = await fetch(`${API_BASE_URL}/api/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prUrl }),
    signal,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Failed to analyze PR')
  }

  return response.json()
}