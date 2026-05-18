import FindingCard from './FindingCard'

function FindingSection({ title, findings, type }) {
    const hasFindings = findings && findings.length > 0
    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">
            {title}
            </h3>

            <div className="mt-3 space-y-3">
                {hasFindings ? (
                    findings.map((finding, index) => (
                    <FindingCard
                        key={index}
                        finding={finding}
                        type={type}
                    />
                    ))
                ) : (
                    <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    No {title.toLowerCase()} found.
                    </p>
                )}
            </div>
        </div>
  )
}

export default FindingSection