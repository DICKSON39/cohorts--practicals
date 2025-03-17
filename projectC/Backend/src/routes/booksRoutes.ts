
import express from 'express';
import { protect } from '../middleWare/auth/protect';
import { addBook, getBookById, getBooks, updateBookAvailability } from '../controllers/bookController';
import { borrowBook, returnBook } from '../controllers/borrowControllers';
import { Admin, Librarian, Borrower } from '../middleWare/auth/roleMiddleware';


const router = express.Router();

// Routes for books
router.post("/", protect, Librarian, addBook);
router.get("/", getBooks);
router.get("/:id", getBookById);

// Route for updating book availability
router.patch("/:id/availability", protect, Librarian, async (req, res) => {
    const { available_copies } = req.body;
    const { id } = req.params;
    
    await updateBookAvailability(parseInt(id), available_copies);
    res.json({ message: "Book availability updated successfully" });
});

//Routes for bookcopies

router.get('/:book_id',protect,getBookById)


// Routes for borrowing and returning books
router.post("/:id/borrow", protect, Borrower, borrowBook);
router.post("/:id/return", protect, Borrower, returnBook);

export default router;
