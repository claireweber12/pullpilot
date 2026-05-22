import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import reviewRoutes from './routes/reviewRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5050

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('PullPilot backend is running!')
})

app.use('/api', reviewRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})