export function parsePrUrl(url) {
  const pattern = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)\/?$/
  const match = url.match(pattern)

  if (!match) {
    return null
  }

  return {
    owner: match[1],
    repo: match[2],
    pullNumber: match[3],
  }
}