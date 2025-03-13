import express from 'express';
import { borrow, returnBorrowedBook, getBorrowedBooks, getBorrow } from '../controllers/borrowController';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/authorize';

const router = express.Router();

// 📌 Borrow a book (Only Borrowers)
router.post('/', authenticate, authorize([3]), borrow);

// 📌 Return a borrowed book
router.put('/:id/return', authenticate, authorize([3]), returnBorrowedBook);

// 📌 Get all borrowed books (Only Librarians & Admins)
router.get('/', authenticate, authorize([1, 2]), getBorrowedBooks);

// 📌 Get details of a single borrowed book
router.get('/:id', authenticate, authorize([1, 2]), getBorrow);

export default router;
