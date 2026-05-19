export async function getPullRequest(owner, repo, pullNumber){
    const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}`

    const response = await fetch(url)

    if(!response.ok){
        throw new Error('Failed to fetch pull request from Github')

    }

    return response.json()
}