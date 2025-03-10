import pool from "./db/db";
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT 

const app = express();

app.use(express.json());

/**
 * Create a new user
 */
app.post("/api/v1/users", async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;

        // Check if the email already exists
        const emailCheck = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
        if (emailCheck.rows.length > 0) {
            res.status(400).json({ message: "User already exists" });
            return
        }

        // Insert user into database
        const userResult = await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            [name, email]
        );

        res.status(201).json({
            message: "User successfully created",
            user: userResult.rows[0]
        });

    } catch (error) {
        console.error("Internal error:", error);
        res.status(500).json({ message: "Internal error" });
    }
});

/**
 * Create an event associated with a user
 */
app.post("/api/v1/events", async (req: Request, res: Response) => {
    try {
        const { title, description, date, user_id } = req.body;

        // Check if user exists
        const userCheck = await pool.query("SELECT id FROM users WHERE id = $1", [user_id]);
        if (userCheck.rows.length === 0) {
            res.status(404).json({ message: "User not found" });
            return
        }

        // Insert event
        const eventResult = await pool.query(
            "INSERT INTO events (title, description, date, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [title, description, date, user_id]
        );

        res.status(201).json({
            message: "Event successfully created",
            event: eventResult.rows[0],
        });

    } catch (error) {
        console.error("Internal error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

/**
 * Get all users
 */
app.get("/api/v1/users", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal error" });
    }
});

/**
 * Get a specific user by ID
 */
app.get("/api/v1/users/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        if (result.rows.length === 0) {
             res.status(404).json({ message: "User not found" });
             return
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal error" });
    }
});

/**
 * Update user details
 */

app.put("/api/v1/users/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        // Check if the user exists
        const userCheck = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        if (userCheck.rows.length === 0) {
             res.status(404).json({ message: "User not found" });
             return
        }

        // Update user details
        const updatedUser = await pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id]
        );

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser.rows[0]
        });

    } catch (error) {
        console.error("Internal error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`running on port${port}`)
})