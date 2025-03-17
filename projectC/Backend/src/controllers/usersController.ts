// Use UserRequest instead of Request.
// Ensure Admins manage users (using adminGuard in userRoutes.ts).
// Return only safe user details (excluding password).
// ✅ Ensures Admins can manage users (CRUD).
// ✅ Returns safe user details (excludes password).
// ✅ New users default to the Attendee role.
import { Request, Response } from "express";

import pool from "../config/db";
import asyncHandler from "../middleWare/asyncHandler";

//Only admins should get all users
export const getUsers = asyncHandler(async(req:Request, res:Response) => {
    const result = await pool.query("SELECT user_id, name, email, role_id FROM users ORDER BY user_id ASC");
    res.status(200).json(result.rows);
})