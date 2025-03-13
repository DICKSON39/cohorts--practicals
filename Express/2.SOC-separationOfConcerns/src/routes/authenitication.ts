import express from 'express'
import {register,deleteUser } from '../controllers/userController'
import { authenticateToken, authorizeRole} from '../middlewares/authentication'
import { getBooks, addBooks, deleteBook } from "../controllers/booksController";
const router = express.Router()


router.post('/register', register)
router.post('/user/"id',deleteUser)
//No authorization needed
router.get("/books", getBooks);


//On;ly Librarian can add books
router.post("/books", authenticateToken, authorizeRole("librarian"), addBooks);

router.get('/testing', (req,res)=>{
    res.send("Auth routes is working")
})

//only admin can delete books
router.delete("/books/:id", authenticateToken, authorizeRole("admin"), deleteBook);


export default router

