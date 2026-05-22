function LoadingReview() {
  return (
    <section className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Analyzing pull request...
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            PullPilot is fetching the diff, reviewing changed files, and generating feedback.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
      </div>
    </section>
  )
}

export default LoadingReview