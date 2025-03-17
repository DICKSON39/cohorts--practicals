import express from 'express';
import pool from '../config/db';
import asyncHandler from '../middleWare/asyncHandler';
import { UserRequest } from '../utils/types/user';
import { Response } from 'express-serve-static-core';
import { BookRequest } from '../utils/types/booksTypes';

// Add a new book (Only Librarian or Admin)
export const addBook = asyncHandler(async (req: UserRequest, res: Response) => {
  if (!req.user) {
    res.status(401).json({ message: "Not authorized" });
    return;
  }

  const { title, author, genre, year, pages, publisher, description, price, total_copies, available_copies } = req.body;

  if (req.user.role_name !== "Librarian" && req.user.role_name !== "Admin") {
    res.status(403).json({ message: "Access denied: Only Librarians or Admins can add books" });
    return;
  }

  const result = await pool.query(
    `INSERT INTO Books (title, author, genre, year, pages, publisher, description, price, total_copies, available_copies) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
    [title, author, genre, year, pages, publisher, description, price, total_copies, available_copies]
  );

  res.status(201).json({
    message: "Book added successfully",
    book: result.rows[0]
  });
});

// Get all books (Public)
export const getBooks = asyncHandler(async (req: BookRequest, res: Response) => {
  const result = await pool.query("SELECT * FROM Books ORDER BY title ASC");
  res.status(200).json(result.rows);
});

// Get a single book by ID
export const getBookById = asyncHandler(async (req: BookRequest, res: Response) => {
  const { id } = req.params;

  const result = await pool.query("SELECT * FROM Books WHERE id = $1", [id]);

  if (result.rows.length === 0) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(200).json(result.rows[0]);
});

// Update book availability (Only Librarian or Admin)
export const updateBookAvailability = async (book_id: number, available_copies: number) => {
  await pool.query("UPDATE Books SET available_copies = $1 WHERE id = $2", [available_copies, book_id]);
};
