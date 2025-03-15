import pool from "../db/db.config"; // Assuming you're using PostgreSQL

export const getBookById = async (bookId: string) => {
    const result = await pool.query("SELECT * FROM books WHERE book_id = $1", [bookId]);
    return result.rows[0]; // Return the book if found
};

export const deleteBookById = async (bookId: string) => {
    await pool.query("DELETE FROM books WHERE book_id = $1", [bookId]);
};
