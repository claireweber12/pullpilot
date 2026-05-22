function HowItWorks() {
  return (
    <section className="mx-auto mt-12 max-w-5xl">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Step 1
          </p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">
            Paste a PR URL
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter a public GitHub pull request link for PullPilot to analyze.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Step 2
          </p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">
            Fetch the diff
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The backend retrieves PR metadata, changed files, and diff patches.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Step 3
          </p>
          <h3 className="mt-2 text-lg font-bold text-slate-900">
            Review with AI
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            PullPilot summarizes the change and flags bugs, edge cases, and review suggestions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks