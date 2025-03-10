import express from 'express'
import {register, login,users,deleteUser} from '../controllers/authController';

const router = express.Router()


router.post("/register", register);
router.post("/login", login)
 router.get('/users', users)
 router.delete('/users/:id', deleteUser)


router.get("/test", (req, res) => {
    res.send("Auth routes working!");
  });
  

export default router