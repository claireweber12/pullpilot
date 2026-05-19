export async function getPullRequest(owner, repo, pullNumber){
    const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}`

    const response = await fetch(url)

    if(!response.ok){
        throw new Error('Failed to fetch pull request from Github')

    }

    return response.json()
}

export async function getPullRequestFiles(owner, repo, pullNumber) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch pull request files from GitHub')
  }

  return response.json()
}