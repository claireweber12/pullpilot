export function createFakeReview(prUrl, parsedPr) {
  return {
    pr: {
      title: `Review for ${parsedPr.owner}/${parsedPr.repo} PR #${parsedPr.pullNumber}`,
      author: 'JohnDoe',
      filesChanged: 4,
      additions: 128,
      deletions: 32,
      url: prUrl,
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