import express,{Response, Request} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path  from 'path'
import { readFileSync } from 'fs'
import pool from './db/db'


dotenv.config()

const app = express()


const port = process.env.PORT

app.use(express.json())



const _dirname = path.resolve

//Create a user that will post (post /api/v1/users)
//We make it async to ensure efficiency.

app.post('/api/v1/users', async (req:Request, res:Response) => {
    try {
        const {name, email, password} = req.body

       const emailCheck = await pool.query("SELECT id FROM users WHERE email = $1", [email])

       if(emailCheck.rows.length > 0) {
       res.status(400).json({message: "User already exist"})
       return
       
       }
       

       //Insert the user
       const  userResult = await pool.query("INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING * ", [name, email, password])

       res.status(201).json({message: "user create  succces", 
        user: userResult.rows[0]
       })
     
    } catch (error) {
        console.error("Error creating user ", error)
        res.status(500).json({message: "Server errro "})
    }
 })




app.post('/api/v1/events', async(req:Request, res:Response) => {
    try {
        const {title, location, date,price, user_id} = req.body

        //check if a user exists before continuing
        const userCheck = await pool.query("SELECT id FROM users WHERE id = $1", [user_id])

        //if the user does not exist can't post
        if(userCheck.rows.length === 0) {
            res.status(400).json({message: "user not found"})
            return
        }

        const eventResult = await pool.query (
            "INSERT INTO events (title, location, date, price, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING * ",
            [title, location, date, price, user_id]
        );
        res.status(201).json({message: "Event created successfully", event: eventResult.rows[0]})


    } catch (error) {
        console.error("Error creating events ", error)
        res.status(500).json({message: "Errorfetching Events"})
    }
})


app.listen(port, () => {
    console.log(`running on localhost://${port}`)
})

 





