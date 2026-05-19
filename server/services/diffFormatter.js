


function shouldSkipFile(file) {
  const filename = file.filename.toLowerCase()

  return (
    filename.includes('package-lock.json') ||
    filename.includes('yarn.lock') ||
    filename.includes('pnpm-lock.yaml') ||
    filename.endsWith('.min.js') ||
    filename.endsWith('.map') ||
    !file.patch
  )
}



export function formatPullRequestDiff(files) {
  const formattedDiff = files
    .filter((file) => !shouldSkipFile(file))
    .map((file) => {
      return `
File: ${file.filename}
Status: ${file.status}
Additions: ${file.additions}
Deletions: ${file.deletions}

Diff:
${file.patch}
`
    })
    .join('\n---\n')

  return formattedDiff.slice(0, 12000)
}