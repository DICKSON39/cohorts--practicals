import pool from "../db/db";

interface BorrowRequest {
    user_id: number;
    book_id: number;
    librarian_id: number;
  }
  
  // Borrow a book
  export const borrowBook = async (borrow: BorrowRequest) => {
    const query = `
      INSERT INTO borrowers (user_id, book_id, librarian_id, status)
      VALUES ($1, $2, $3, 'Borrowed') RETURNING *;
    `;
    const values = [borrow.user_id, borrow.book_id, borrow.librarian_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  };
  
  // Return a book
  export const returnBook = async (borrower_id: number) => {
    const query = `
      UPDATE borrowers SET status = 'Returned', return_date = CURRENT_DATE 
      WHERE borrower_id = $1 AND status = 'Borrowed' RETURNING *;
    `;
    const { rows } = await pool.query(query, [borrower_id]);
    return rows[0];
  };
  
  // Get all borrowed books
  export const getAllBorrowedBooks = async () => {
    const { rows } = await pool.query(`
      SELECT b.borrower_id, u.name AS borrower_name, bk.title AS book_title, 
             l.name AS librarian_name, b.borrow_date, b.return_date, b.status
      FROM borrowers b
      JOIN users u ON b.user_id = u.user_id
      JOIN books bk ON b.book_id = bk.book_id
      JOIN users l ON b.librarian_id = l.user_id;
    `);
    return rows;
  };
  // Get borrowing details by ID
export const getBorrowById = async (borrower_id: number) => {
    const { rows } = await pool.query(`SELECT * FROM borrowers WHERE borrower_id = $1`, [borrower_id]);
    return rows[0];
  };
  