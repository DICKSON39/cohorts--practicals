import { Request, Response } from 'express';
import { AuthRequest } from '../types/customRequest';
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from '../models/bookModel';

export const addBook = async (req: AuthRequest, res: Response) => {
  try {
    const { title, author, genre, year, pages, publisher, description,price,total_copies,image } = req.body;
    const created_by = (req as any).user.user_id; // Get user ID from JWT

    if (!title || !author) {
       res.status(400).json({ message: 'Title and Author are required' });
       return
    }

    const newBook = await createBook({ title, author, genre, year, pages, publisher, description, price, total_copies,image,created_by });
    res.status(201).json({ message: 'Book added successfully', book: newBook });
    return
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getBooks = async (_req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await getBookById(parseInt(id));

    if (!book)  res.status(404).json({ message: 'Book not found' });
    return

    res.json(book);
    
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
    
  }
};

export const editBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBook = await updateBook(parseInt(id), req.body);

    if (!updatedBook)  res.status(404).json({ message: 'Book not found' });
    return

    res.json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
    return
  }
};

export const removeBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBook = await deleteBook(parseInt(id));

    if (!deletedBook)
        res.status(404).json({ message: 'Book not found' });
    return

    res.json({ message: 'Book deleted successfully' });
    
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
