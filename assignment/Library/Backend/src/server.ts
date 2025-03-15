import express from 'express'
import dotenv from 'dotenv'
//import pool from './config/db.config'


const app  = express()

dotenv.config()

const PORT = process.env.PORT



app.listen(PORT, () => {
    console.log(`😍😍👌👌server running on http://localhost:${PORT}`)
})

