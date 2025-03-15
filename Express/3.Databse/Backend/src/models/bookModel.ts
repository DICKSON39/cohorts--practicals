import pool from "../db/db"
interface Book {
    title: string;
    author: string;
    genre?: string;
    year?: number;
    pages?: number;
    publisher?: string;
    description?: string;
    image?: string;
    price?: number;
    created_by: number;
  }
  
  // Add a new book
  export const createBook = async (book: Book): Promise<void> => {
    const query = `
      INSERT INTO books (title, author, genre, year, pages, publisher, description, image, price, created_by)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;
    `;
    const values = [
      book.title, book.author, book.genre, book.year, book.pages, 
      book.publisher, book.description, book.image, book.price, book.created_by
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  };
  
  // Get all books
  export const getAllBooks = async () => {
    const { rows } = await pool.query(`SELECT * FROM books`);
    return rows;
  };
  
  // Get a book by ID
  export const getBookById = async (book_id: number) => {
    const { rows } = await pool.query(`SELECT * FROM books WHERE book_id = $1`, [book_id]);
    return rows[0];
  };
  
  // Update a book
  export const updateBook = async (book_id: number, updatedFields: Partial<Book>) => {
    const fields = Object.keys(updatedFields)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');
    
    const values = Object.values(updatedFields);
    values.push(book_id);
  
    const query = `UPDATE books SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE book_id = $${values.length} RETURNING *;`;
    const { rows } = await pool.query(query, values);
    return rows[0];
  };
  
  // Delete a book
  export const deleteBook = async (book_id: number) => {
    const { rows } = await pool.query(`DELETE FROM books WHERE book_id = $1 RETURNING *`, [book_id]);
    return rows[0];
  };

  // Check if the book is available (not borrowed or already returned)
export const isBookAvailable = async (book_id: number) => {
    const query = `
      SELECT * FROM borrowers 
      WHERE book_id = $1 AND status = 'Borrowed';
    `;
    const { rows } = await pool.query(query, [book_id]);
    return rows.length === 0; // If no active borrow records, the book is available
  };
  