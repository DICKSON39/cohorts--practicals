//This is to protect routes
//checks the token of the users

import { NextFunction,Request,Response } from "express";
import { asyncHandler } from "../asyncHandler";
import jwt from 'jsonwebtoken'
import pool from "../../config/db.config";
import { UserRequest } from "../../utils/types/userTypes";


//creating an auth middleware functoin to protect routes

export const protect = asyncHandler(async(req:UserRequest,res:Response, next:NextFunction) => {
    let token;

    //Trying to get token from Authorization header
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];


        //get the token from cookies
        if(!token && req.cookies?.access_token) {
            token = req.cookies.access_token;
        }

        //if no token found
        if(!token) {
            res.status(401).json({message: "Not authorized, no toke"})
        }

        try {
            //We have the token but we need to verify it
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET is not defined in environment variables");
            }

            //Verify the token
            const decoded = jwt.verify(token,process.env.JWT_SECRET) as {userId:string; roleId:number}

            //Get the user from the database

            const userQuery = await pool.query (
                "SELECT users.id, users.name, users.role_id,user_roles.role_name FROM users JOIN user_roles ON users.role_id=user_roles.id WHERE user.id = $1",
                [decoded.userId] 
            )

              
        if (userQuery.rows.length === 0) {
            res.status(401).json({ message: "User not found" });
            return;
        }


        //attach the user to the request 
      req.user = userQuery.rows[0]

 next() //proceed to next thing 


        } catch (error) {
            console.error("JWT",error)
            res.status(401).json({message: "not authorized, token failed"})
        }
    }
})