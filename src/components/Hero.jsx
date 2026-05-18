import PRInputForm from './PRInputForm'

function Hero({ onAnalyze }) {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">AI Code Review Assistant</p>
        <h1 className="mt-8 max-w-3xl text-5xl font-bold tracking-tight text-slate-950">
            Review pull requests faster with PullPilot.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Paste a GitHub pull request URL and get a structured review with a summary,
            potential bugs, edge cases, style feedback, and a suggested verdict.
        </p>

        <PRInputForm onAnalyze={onAnalyze} />
    </section>
    
  )
}

export default Hero