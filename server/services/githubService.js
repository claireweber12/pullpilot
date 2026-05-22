export async function getPullRequest(owner, repo, pullNumber){
    const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}`

    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'PullPilot',
      },
    })

    if(!response.ok){
      const errorText = await response.text()
      throw new Error(`Failed to fetch pull request from Github: ${response.status} ${response.statusText} - ${response.statusText}`)

    }

    return response.json()  
}

export async function getPullRequestFiles(owner, repo, pullNumber) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`

  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'PullPilot',
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to fetch pull request files from GitHub: ${response.status} ${response.statusText} - ${response.errorText}`)
  }

  return response.json()
}