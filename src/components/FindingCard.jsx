function FindingCard({ finding, type }) {
    const title = finding.issue || finding.case
    const detail = finding.suggestion || finding.recommendation
    const file = finding.file || 'General'
    const severity = finding.severity || type

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-sm text-slate-600">
          {file}
        </p>

        <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
          {severity}
        </span>
      </div>

      <p className="mt-3 font-medium text-slate-900">
        {title}
      </p>

      <p className="mt-2 text-sm text-slate-600">
        {finding.suggestion ? 'Suggestion' : 'Recommendation'}: {detail}
      </p>
    </div>
  )
}

export default FindingCard