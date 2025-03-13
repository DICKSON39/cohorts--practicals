import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express'
import pool from '../db/db.config'
import {Response, Request} from 'express'
import { createUser, getUserByEmail } from '../models/userModel'
import { deleteBookById, getBookById } from '../middlewares/bookServices'


export const addBooks = async (req: Request, res: Response) => {
    try {
        const { title, author, genre, year, pages, publisher, description, image, price } = req.body;

        // Check if the book already exists
        const bookCheck = await pool.query("SELECT * FROM books WHERE title = $1 AND author = $2", [title, author]);

        if (bookCheck.rows.length > 0) {
            res.status(400).json({ message: "Book already exists" });
            return
        }

        // Get user ID from authentication (ensure `req.user` exists)
        const user_id = req.user?.user_id; // Assuming `req.user` is added via authentication middleware
        if (!user_id) {
             res.status(403).json({ message: "Unauthorized: No user ID found" });
             return
        }

        // Insert new book
        const eventDetails = await pool.query(
            "INSERT INTO books (user_id, title, description, author, pages, genre, publisher, year, price, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [user_id, title, description, author, pages, genre, publisher, year, price, image]
        );

        res.status(201).json({
            message: "Book created successfully",
            book: eventDetails.rows[0],
        });

    } catch (error) {
        console.error("Internal error", error);
        res.status(500).json({ message: "Internal server error" });
    }
}



export const deleteBook = async (req: Request, res: Response) => {
    try {
        const book_id = req.params.id; // Still retrieving from URL params

        // Check if the book exists
        const book = await getBookById(book_id);
        if (!book) {
             res.status(404).json({ message: "Book not found" });
             return
        }

        // Delete the book
        await deleteBookById(book_id);
         res.status(200).json({ message: "Book deleted successfully" });
         return

    } catch (error) {
        console.error("Error deleting book:", error);
         res.status(500).json({ message: "Internal server error" });
         return
    }
};

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await pool.query("SELECT * FROM books");
        res.status(200).json(books.rows);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
