import express from 'express'
import cors from 'cors'
import 'dotenv/config'


import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'



const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user' , userRouter)

app.get('/', (req, res) => {
    res.send("Hello das")
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})

