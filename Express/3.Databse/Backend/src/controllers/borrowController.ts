import { Request, Response } from 'express';
import { borrowBook, returnBook, getAllBorrowedBooks, getBorrowById} from '../models/borrowModel';


export const borrow = async (req: Request, res: Response) => {
  try {
    const { book_id, librarian_id } = req.body;
    const user_id = (req as any).user.user_id; // Borrower ID from JWT

    if (!book_id || !librarian_id) {
       res.status(400).json({ message: 'Book ID and Librarian ID are required' });
       return
    }

    const newBorrow = await borrowBook({ user_id, book_id, librarian_id });
    res.status(201).json({ message: 'Book borrowed successfully', borrow: newBorrow });
    return
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
    return
  }
};

export const returnBorrowedBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const returned = await returnBook(parseInt(id));

    if (!returned) 
         res.status(404).json({ message: 'Borrow record not found or already returned' });
        return

    res.json({ message: 'Book returned successfully', borrow: returned });
    return
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
    return
  }
};

export const getBorrowedBooks = async (req: Request, res: Response) => {
  try {
    const borrowedBooks = await getAllBorrowedBooks();
    res.json(borrowedBooks);
    return
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
    return
  }
};

export const getBorrow = async (req: Request, res: Response) : Promise<void>=> {
    try {
      const { id } = req.params;
      const borrow = await getBorrowById(parseInt(id));
  
      if (!borrow)  
        res.status(404).json({ message: 'Borrow record not found' });
      return
  
      res.json(borrow);
      
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
      return
    }
  };

