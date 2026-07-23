import express from 'express'
dotenv.config()

import cors from 'cors'
import dotenv from 'dotenv'
import sessionRoutes from './routes/sessions.js'


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "https://codesk-delta.vercel.app",
    credentials: true,
}))
app.use(express.json())

app.use('/api/sessions', sessionRoutes)

app.get('/', (req, res)=>{
    res.json({message: 'CoDEsk server is running'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})