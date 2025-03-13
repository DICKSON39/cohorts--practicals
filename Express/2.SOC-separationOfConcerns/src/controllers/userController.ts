import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express'

import pool from '../db/db.config'
import {Response, Request,NextFunction} from 'express'
import { createUser, getUserByEmail } from '../models/userModel'
import { authenticateToken } from '../middlewares/authentication';

const secretKey = 'your_secret_key';
const validRoles = ["admin", "librarian", "borrower"]; // Define valid roles



export const register = async (req: Request, res: Response) => {
  try {
      const { name, email, password, roleName } = req.body;

      if (!validRoles.includes(roleName)) {
           res.status(400).json({ message: "Invalid role. Allowed roles: Admin, Librarian, Borrower" });
           return
      }

      const existingUser = await getUserByEmail(email);
      if (existingUser.rows.length > 0) {
           res.status(400).json({ message: "User already exists" });
           return
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await createUser(name, email, hashedPassword, roleName);

      // Generate JWT Token
      const token = jwt.sign(
          { userId: newUser.id, role: newUser.role },
          secretKey,
          { expiresIn: "1h" }
      );

       res.status(201).json({
          message: "User registered successfully",
          token,
          user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
      });
      return
  } catch (error) {
      console.error("Registration Error:", error);
       res.status(500).json({ message: "An error occurred during registration" });
       return
  }
};

export const login = async(req:Request, res:Response) => {
  try {
    const {email, password} = req.body

    const userCheck = await getUserByEmail(email)
    if(userCheck.rows.length === 0) {
      res.status(400).json({message: "Invalid password"})
      return
    }

    const validPassword = await bcrypt.compare(password, userCheck.rows[0].password)

    if(!validPassword){
      res.status(400).json({message: "Invalid email or password"})
      return
    }

    const token = jwt.sign({
      userId: userCheck.rows[0].id, role:userCheck.rows[0].role_name},
      secretKey,{expiresIn: '1hr'})

      res.status(200).json({
        message: "Login successful",
        token,
        userCheck: {id: userCheck.rows[0].id, name:userCheck.rows[0].name, email:userCheck.rows[0].email, role:userCheck.rows[0].role_name},
      })
  }catch (error) {
    console.error("Login Error:", error);
     res.status(500).json({ message: "An error occurred during login" });
     return
  }
}




export const deleteUser = async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
  
      const checkUser = await pool.query(
        "SELECT * FROM public.users WHERE user_id = $1",
        [user_id]
      );
      if (checkUser.rows.length === 0) {
        res.status(400).json({ message: "User not found" });
        return;
      }
      await pool.query("DELETE FROM public.users WHERE id = $1", [user_id]);
      res.json({ message: "User deleted successful" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };