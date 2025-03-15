import express from 'express'
import  dotenv from 'dotenv'
import authenitication from './routes/authenitication'
import pool from './db/db.config';
import path from 'path'
import cors from 'cors'

dotenv.config();

//insatnce of express
const app = express();


//Middlewares
app.use(cors())
app.use(express.json())


//Routes
app.use('/api',authenitication)

//Load the variables
const  port = process.env.PORT
console.log(port)

//Creating a get request saying Hello World!



const PORT = process.env.PORT

// create a server

app .listen(PORT, () => {
    console.log(`Server is running on port ${port}`)
}) 