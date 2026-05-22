import FindingCard from './FindingCard'
import FindingSection from './FindingSection'
import VerdictCard from './VerdictCard'
import ChangedFiles from './changedFiles'
import { useState } from 'react'
function ReviewResults({ data }) {
    //https://github.com/facebook/react/pull/123
    const [copied, setCopied] = useState(false)
    function formatLabel(value){
        return value
            .split('_')
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(' ')
    }
    //Helper function to copy results to clipboard
    function handleCopyReview() {
        const reviewText = `
        PullPilot Review

        PR: ${data.pr.title}
        Repo: ${data.pr.repo}
        Author: ${data.pr.author}

        Summary:
        ${data.review.summary}

        Risk Level:
        ${formatLabel(data.review.riskLevel)}

        Suggested Verdict:
        ${formatLabel(data.review.verdict)}
        `

        navigator.clipboard.writeText(reviewText)

        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }
  return (
    <section className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
                Review Results
            </h2>

            <button
                onClick={handleCopyReview}
                className={`rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold cursor-pointer ${
                    copied
                    ? 'border-green-200 bg-green-50 text-green-700'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
            >
                {copied ? 'Copied' : 'Copy Review'}
            </button>
        </div>
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
      <ChangedFiles files={data.pr.files} />
      <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                {formatLabel(data.review.riskLevel)} Risk
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Verdict: {formatLabel(data.review.verdict)}
            </span>
        </div>

        <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">
                Summary
            </p>

            <p className="mt-2 text-slate-700">
                {data.review.summary}
            </p>
        </div>
        <FindingSection
            title="Potential Bugs"
            findings={data.review.potentialBugs}
            type="bug"
        />

        <FindingSection
            title="Edge Cases"
            findings={data.review.edgeCases}
            type="edge case"
        />

        <FindingSection
            title="Style Issues"
            findings={data.review.styleIssues}
            type="style"
        />

        <VerdictCard verdict={data.review.verdict} />

        

    </section>
    
  )
}

export default ReviewResults