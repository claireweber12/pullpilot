function ChangedFiles({ files }) {
  if (!files || files.length === 0) {
    return null
  }

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-lg font-semibold text-slate-900">
        Changed Files
      </h3>

      <div className="mt-3 space-y-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 rounded-lg bg-white p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="font-mono text-sm text-slate-700">
              {file.filename}
            </p>

            <div className="flex gap-3 text-sm">
              <span className="text-green-700">
                +{file.additions}
              </span>

              <span className="text-red-700">
                -{file.deletions}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChangedFiles