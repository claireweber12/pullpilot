export function createFakeReview(prUrl, parsedPr, githubPr) {
  return {
    pr: {
      title: githubPr.title,
      author: githubPr.user.login,
      filesChanged: githubPr.changed_files,
      additions: githubPr.additions,
      deletions: githubPr.deletions,
      url: githubPr.html_url,
      repo: `{parsedPr.owner}/${parsedPr.repo}`,
      pullNumber: parsedPr.pullNumber,
    },
    review: {
      summary:
        'This PR adds a basic authentication flow, including login form handling, protected routes, and token storage.',
      riskLevel: 'medium',
      verdict: 'request_changes',
      potentialBugs: [],
      edgeCases: [
        {
          case: 'Missing or malformed token',
          recommendation:
            'Handle invalid token parsing and clear the stored session.',
        },
      ],
      styleIssues: [
        {
          file: 'src/components/Login.jsx',
          issue: 'Validation logic is repeated inside the submit handler.',
          suggestion:
            'Move validation into a helper function for readability.',
        },
      ],
    },
  }
}