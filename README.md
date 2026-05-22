# PullPilot   
[View PullPilot](https://pullpilot-7lr9aoncy-claireweber12s-projects.vercel.app/)

PullPilot is an AI-powered GitHub pull request reviewer that helps developers understand code changes faster. Users can paste a public GitHub pull request URL, and PullPilot fetches the PR metadata, changed files, and diffs before generating a structured AI review.

The review includes a summary, risk level, potential bugs, edge cases, style issues, and a suggested verdict.

## Features

- Paste a public GitHub pull request URL
- Validate PR URLs on the frontend and backend
- Fetch real PR metadata using the GitHub API
- Fetch changed files and diff patches
- Format pull request diffs for AI analysis
- Generate structured AI review feedback using Groq
- Display review results in a clean React/Tailwind dashboard
- Show loading and error states
- Copy review summaries to the clipboard

## Tech Stack

- React
- Vite
- Tailwind CSS
- Node.js
- Express
- GitHub REST API
- Groq API
- JavaScript

## How It Works

1. The user pastes a GitHub pull request URL.
2. The frontend validates the URL format.
3. The backend validates the URL again and extracts the owner, repo, and pull request number.
4. The backend calls the GitHub API to fetch PR metadata and changed files.
5. PullPilot formats the diff into a clean AI-readable prompt.
6. Groq generates a structured review.
7. The frontend displays the review in categorized cards.

## Local Setup

Clone the repository:

```bash
git clone git@github.com:claireweber12/pullpilot.git
cd pullpilot
```
Install Dependencies:
```bash
npm install
```
Create a .env file in the project root:
```bash
GROQ_API_KEY=your_groq_api_key_here
```
Start the backend
```bash
npm runn server
```
Start the frontend in a different terminal
```bash
npm run dev
```
Open the local Vite URL in your browser

## Example Test URL
You can test the app with a small public PR: 
`https://github.com/facebook/react/pull/123`

##Current Limitations:
- Only supports public Github pull requests
- Does not post comments back to GitHub yet
- Large diffs are truncated before being sent to the AI model
- AI output may occasionally require parsing safeguards

## Future Improvements:
- Add GitHub OAuth for private repositories
- Allow users to post the AI review as a GitHub PR comment
- Add line-specific review comments
- save previous reviews in a database
- add support for multiple AI providers
- Improve large PR handling with file-by-file review
