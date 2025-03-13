import express from 'express';
import { authenticate } from '../middleware/auth';
import { authorize } from '../middleware/authorize';
import { AuthRequest } from '../types/customRequest';
import { addBook, getBooks, getBook, editBook, removeBook } from '../controllers/bookController';

const router = express.Router();

// Example protected route: Only authenticated users can access
router.get('/protected', authenticate, (req:AuthRequest, res) => {
  res.json({ message: 'You accessed a protected route!', user: req.user });
  return
});

// Example admin-only route: Only Admins (role_id = 1) can add books
router.post('/add', authenticate, authorize([1]), (req, res) => {
  res.json({ message: 'Book added successfully!' });
});

router.get('/', getBooks);

// 📌 Public route - Get a single book
router.get('/:id', getBook);

// 📌 Admin only - Add a new book
router.post('/', authenticate, authorize([1]), addBook);

// 📌 Admin only - Update a book
router.put('/:id', authenticate, authorize([1]), editBook);

// 📌 Admin only - Delete a book
router.delete('/:id', authenticate, authorize([1]), removeBook);
export default router;
