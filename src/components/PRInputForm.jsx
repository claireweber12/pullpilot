import {useState} from 'react'

function PRInputForm() {
    const [prUrl, setPrUrl] = useState('')
    const [error, setError] = useState('')

    function parsePrUrl(url) {
        const pattern = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)\/?$/
        const match = url.match(pattern)

        if(!match){
            return null
        }

        return{
            owner: match[1],
            repo:match[2],
            pullNumber:match[3],
        }
    }

    //Temporary submit handler
    function handleSubmit(event){
        event.preventDefault()
        
        const parsedUrl = parsePrUrl(prUrl.trim())
        if(!parsedUrl){
            setError('Please enter a valid Github PR URL')
            return
        }
        
        setError('')
        console.log(parsedUrl)
    }
    return (
        <div className='mt-10 w-full max-w-2xl'>
            <form 
                onSubmit={handleSubmit}
                className="mt-10 flex w-full max-w-2xl gap-3 sm:flex-row"
            >
                <input
                    value={prUrl}
                    onChange={(event) => setPrUrl(event.target.value)}
                    className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-slate-900 sm:text-base"
                    placeholder="Paste a GitHub PR URL"
                />

                <button 
                    onSubmit={handleSubmit}
                    className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700 sm:w-auto">
                    Analyze PR
                </button>
            </form>
            {error &&(
                <p className="mt-3 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    )
}

export default PRInputForm