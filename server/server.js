import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.port || 5050

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('PullPilot backend is running!')
})

app.post('/api/review', (req, res) => {
    const {prUrl} = req.body
    if(!prUrl){
        return res.status(400).json({
            error: 'PR URL is required',
        })
    }

    res.json({
        pr:{
            title: 'Add authentication workflow',
            author: 'JohnDoe',
            filesChanged:4,
            additions:128,
            deletions:32,
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
                recommendation:'Handle invalid token parsing and clear the stored session',
                },
            ],
            styleIssues:[
                {
                file:'src/components/Login.jsx',
                issue: 'Validation logic is repeated inside the submit handler',
                suggestion:
                'Move validation into a helper function for readability',
                },
            ],
        },
    })
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})