import express from "express";
import dotenv from "dotenv";
import { Request, Response } from "express";
import pool from "./db/db";


//creating an instance of express
const app = express();

//configuring the dotenv to use the .env file
dotenv.config();

//port configuration for the server to run on port 
const port = process.env.PORT;

//middleware configuration which allows us to accept json data
app.use(express.json());


//creating a route for the server to listen to 
app.get("/", (req: Request, res: Response) => {
  res.send("hello world we love express");
});

//creating a server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//User routes
//Crete a user
//Get all users
//Get a user
//Update a user
//Delete a user

//Create a user
app.post("/api/v1/users", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    //Check if the email already exists
    const emailCheck = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if(emailCheck.rows.length > 0) {
        res.status(400).json({message: "User already exists"});
        return;
    }


    // insert the user into the database
   const userResult = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2) RETURNING *', [name, email, password

   ]);
   app.get

   res.status(201).json ({
         message: "User created successfully",
            data: userResult.rows[0]
   })
  
   // return the user created 
  } catch (error) {}
});
