import db from '../db/db.config';
import bcrypt from 'bcryptjs';
import pool from '../db/db.config';

export interface User {
   
   name: string;
   email: string;
   password: string;
   roleName:string 
}


export const createUser = async (name: string, email: string, password: string, roleName: string) => {
    try {
        // Convert roleName to match the database case
        const formattedRoleName = roleName.charAt(0).toUpperCase() + roleName.slice(1).toLowerCase();

        // Validate role existence
        const roleQuery = await pool.query("SELECT roleName FROM user_roles WHERE roleName = $1", [formattedRoleName]);

        if (roleQuery.rows.length === 0) {
            console.error("Invalid role name:", formattedRoleName);
            return null;
        }

        // Insert user into the database
        const result = await pool.query(
            "INSERT INTO users (name, email, password, roleName) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, password, formattedRoleName]
        );

        return result.rows[0];

    } catch (error) {
        console.error("Error creating user:", error);
        return null;
    }
};



export const getUserByEmail = async (email:string) => {
    try {
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        return result
    } catch (error) {
        console.error("ERRORB FETCHING USER BY email")
       throw error
    }
}