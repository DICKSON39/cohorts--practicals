import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import pool from "../config/db";
import { generateToken } from "../utils/helpers/gerateToken";


import asyncHandler from "../middleWare/asyncHandler";
import { NextFunction } from "express-serve-static-core";

const SECRET_KEY = process.env.JWT_SECRET || "mysecret";

export const register = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, role_id } = req.body;

    // Check if user exists
    const userExists = await pool.query("SELECT user_id FROM users WHERE email = $1", [email]);

    if (userExists.rows.length > 0) {
        res.status(400).json({ message: "User already exists" });
        return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const newUser = await pool.query(
        "INSERT INTO users (name, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING user_id, name, email, role_id",
        [name, email, hashedPassword, role_id]
    );

    // Generate token
    await generateToken(res, newUser.rows[0].user_id, newUser.rows[0].role_id);

    res.status(201).json({
        message: "User registered successfully",
        user: newUser.rows[0]
    });
});

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check if user exists
    const userQuery = await pool.query(
        `SELECT users.user_id, users.name, users.email, users.password, users.role_id 
         FROM users 
         WHERE email = $1`,
        [email]
    );

    if (userQuery.rows.length === 0) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
    }

    // Get user
    const user = userQuery.rows[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401).json({ message: "Invalid email or password" });
        return;
    }

    // Generate JWT token
    await generateToken(res, user.user_id, user.role_id);

    res.status(200).json({
        message: "Login successful",
        user: {
            id: user.user_id,
            name: user.name,
            email: user.email,
            role_id: user.role_id
        }
    });
});


export const logoutUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    //We need to immedietly invalidate the access token and the refreh token 
    res.cookie("access_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        expires: new Date(0) // Expire immediately
    });

    res.cookie("refresh_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        expires: new Date(0) // Expire immediately
    });

    res.status(200).json({ message: "User logged out successfully" });
});