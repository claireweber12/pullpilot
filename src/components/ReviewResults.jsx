function ReviewResults({ data }) {
  return (
    <section className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Review Results
      </h2>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-500">
          Pull Request
        </p>

        <h3 className="mt-1 text-xl font-semibold text-slate-900">
          {data.pr.title}
        </h3>

        <p className="mt-2 text-slate-600">
          By {data.pr.author} • {data.pr.filesChanged} files changed • +{data.pr.additions} / -{data.pr.deletions}
        </p>
      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-medium text-slate-500">
          Summary
        </p>

        <p className="mt-2 text-slate-700">
          {data.review.summary}
        </p>
      </div>
    </section>
  )
}

export default ReviewResults