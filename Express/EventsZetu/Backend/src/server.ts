import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/authroutes'
import usersRoutes from './routes/usersRoutes'

dotenv.config()

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, PUT,DELETE",
    credentials: true //allows cookies and auth headers
}))


//Must have this
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))


const PORT = process.env.PORT


//Routes
app.use("/api/v1/auth", authRoutes)
app.use('/users',usersRoutes)


app.listen(PORT, () => {
    console.log(`👌👌👌 Server is running on Port - ${PORT}`)
})
