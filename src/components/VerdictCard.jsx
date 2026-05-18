function formatLabel(value) {
  return value
    .split('_')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

function VerdictCard({ verdict }) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
      <p className="text-sm font-medium text-slate-300">
        Suggested Verdict
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {formatLabel(verdict)}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        PullPilot recommends this verdict based on the risk level, potential bugs,
        edge cases, and style issues found in the diff.
      </p>
    </div>
  )
}

export default VerdictCard