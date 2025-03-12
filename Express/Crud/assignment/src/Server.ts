import express,{Response, Request} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path  from 'path'
import { readFileSync } from 'fs'
import pool from './db/db'
import bcrypt from 'bcrypt'


dotenv.config()

const app = express()


const port = process.env.PORT

app.use(express.json())



const _dirname = path.resolve

//Create a user that will post (post /api/v1/users)
//We make it async to ensure efficiency.

app.post("/users", async(req:Request, res:Response) => {
    try {
        const {username, email} = req.body

        const emailChecking = await pool.query("SELECT id FROM users WHERE email = $1", [email])
        if(emailChecking.rows.length > 0) {
            res.status(400).json({message: "User already exists"})
            return
        }

        const addingUser = await pool.query("INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *", [username, email])

        res.status(201).json ({
            message: "User successfully created",
            user: addingUser.rows[0]
        })
    } catch (error) {
        console.error("Internal server error");
        res.status(500).json({message: "Internal error"})
        
    }

})

app.post("/events", async(req:Request, res:Response) => {
    try {
        const {image_url, title,price,date,location,company,user_id} =req.body
        
        const userChecking = await pool.query("SELECT id FROM users WHERE id = $1", [user_id]);
        if(userChecking.rows.length === 0) {
            res.status(404).json({message: "User not found"})
            return
        }

        //Inserting the event
        const eventDetails = await pool.query(
            "INSERT INTO events (image_url,title,price,date,location,company,user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
            [image_url, title, price, date, location, company, user_id]
        )
        
        res.status(201).json({
            message: "Created Successfully",
            event: eventDetails.rows[0],
        })
    } catch (error) {
        console.error("Internal error", error)
        res.status(500).json({message: "Internal server error"})
        
    }
})

app.listen(port, () => {
    console.log(`http://localhost/${port}`)
})


app.get("/user/events", async(req:Request, res:Response) => {
  try {
    const query= `
    SELECT 
     events.id AS event_id,  
     events.image_url, 
     events.title, 
     events.price,
     events.date,
     events.location, 
     users.id AS user_id, 
     users.username, 
     users.email
    FROM 
      events 
    JOIN users ON events.user_id = users.id `

    const result = await pool.query(query)

    if (result.rows.length === 0) {
        res.status(400).json({message: "No posts found"})
        return
    }

    res.status(201).json({events: result.rows})
  } catch (error) {
    console.error("internal error", error)
    res.status(500).json({message: "internal error"})
  }

})

