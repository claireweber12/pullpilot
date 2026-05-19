export function createFakeReview(prUrl, parsedPr, githubPr, githubFiles, aiReview) {
  return {
    pr: {
      title: githubPr.title,
      author: githubPr.user.login,
      filesChanged: githubPr.changed_files,
      additions: githubPr.additions,
      deletions: githubPr.deletions,
      url: githubPr.html_url,
      repo: `${parsedPr.owner}/${parsedPr.repo}`,
      pullNumber: parsedPr.pullNumber,
      files: githubFiles.map((file) => ({
      filename: file.filename,
      status: file.status,
      additions: file.additions,
      deletions: file.deletions,
      changes: file.changes,
    }))
    },
    review:aiReview,
  }
}