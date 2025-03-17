import { Response } from "express-serve-static-core";
import asyncHandler from "../middleWare/asyncHandler";
import { UserRequest } from "../utils/types/user";
import pool from "../config/db";

// This checks the availability of a book and its status
export const isCopyBorrowed = asyncHandler(async (req: UserRequest, res: Response) => {
  const { copy_id, status } = req.body;
  
  const result = await pool.query(
    "SELECT * FROM Borrowers WHERE copy_id = $1 AND status = $2",
    [copy_id, status]
  );

  res.json({ isBorrowed: result.rows.length > 0 });
});

// Borrow a book
export const borrowBook = asyncHandler(async (req: UserRequest, res: Response) => {
  const { user_id, copy_id, librarian_id, borrow_date, return_date, status } = req.body;

  const result = await pool.query(
    `INSERT INTO Borrowers (user_id, copy_id, librarian_id, borrow_date, return_date, status) 
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [user_id, copy_id, librarian_id, borrow_date, return_date, status]
  );

  res.status(201).json(result.rows[0]);
});

// Return a book
export const returnBook = asyncHandler(async (req: UserRequest, res: Response) => {
  const { copy_id } = req.body;

  await pool.query("UPDATE Borrowers SET status = 'Returned' WHERE copy_id = $1", [copy_id]);

  res.json({ message: "Book returned successfully" });
});
