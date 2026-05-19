
export async function analyzePr(prUrl) {
  const response = await fetch('http://localhost:5050/api/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prUrl }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Failed to analyze PR')
  }

  return response.json()
}