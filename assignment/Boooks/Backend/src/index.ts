import pool from "./db/db";
import express, { Request, Response, Router } from "express";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { title } from "process";
import cors from 'cors'




dotenv.config();
const app = express();
const router = Router();

app.use(cors())

const port = process.env.PORT;

if (!process.env.JWT_SECRET || !process.env.PORT) {
  console.error("Missing required environment variables");
  process.exit(1);
}

app.use(express.json());

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const createUser = async (name: string, email: string, password: string) => {
  return pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password]
  );
};

const getUserByEmail = async (email: string) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await getUserByEmail(email);

    if (existingUser.rows.length > 0) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await createUser(name, email, hashedPassword);
    res.status(201).json({ message: "User registered", user: user.rows[0] });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }

    const userInfo = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userInfo.rows.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const user = userInfo.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1hr" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

router.post("/register", register);
router.post("/login", login);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

interface books{ 
  title:string;
  publisher: string;
  genre: string
  year: number;
  pages: number

}


//For creating a posts for books
app.post("/books", async(req:Request, res:Response) => {
    try {
        const {user_id, title, description,author,pages,genre,publisher,year,price,image_url} =req.body
        
        const userChecking = await pool.query("SELECT id FROM users WHERE id = $1", [user_id]);
        if(userChecking.rows.length === 0) {
            res.status(404).json({message: "User not found"})
            return
        }

        //Inserting the event
        const eventDetails = await pool.query(
            "INSERT INTO books (user_id, title, description,author,pages,genre,publisher,year,price,image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", 
            [user_id, title, description,author,pages,genre,publisher,year,price,image_url]
        )
        
        res.status(201).json({
            message: "Created Successfully",
            event: eventDetails.rows[0],
        })
    } catch (error) {
        console.error("Internal error", error)
        res.status(500).json({message: "Internal server error"})
        
    }
})

app.get("/user/books", async(req:Request, res:Response) => {
    try {
      const query= `
      SELECT 
     books.id AS event_id,  
     books.image_url, 
     books.title, 
     books.price,
     books.pages,
     books.author,
     books.genre,
     books.publisher,
     books.description, 
       users.id AS user_id, 
       users.name, 
       users.email
      FROM 
         books
      JOIN users ON books.user_id = users.id `
  
      const result = await pool.query(query)
  
      if (result.rows.length === 0) {
          res.status(400).json({message: "No posts found"})
          return
      }
  
      res.status(201).json({events: result.rows})
    } catch (error) {
      console.error("internal error", error)
      res.status(500).json({message: "internal error"})
    }
  
  })

  app.get('/booksFiltering', async(req:Request, res:Response) => {
    try {
      const {title, genre, year, pages} = req.query

      
      const myBooks = await pool.query("SELECT * FROM books ")

      let filteredBooks = [...myBooks.rows]

      if(title) {
        filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes((title as string).toLowerCase()))
      }
      if (genre) {
        filteredBooks=filteredBooks.filter((book) => book.genre.toLowerCase().includes((genre as string).toLowerCase()))
     }
     

     if(year) {
         const yearNum = parseInt(year as string)
         filteredBooks = filteredBooks.filter((book) => book.year === yearNum)
     }

     if(pages) {
         const pagesNum = parseInt(pages as string)
         filteredBooks = filteredBooks.filter((book) => book.pages === pagesNum)
     }

  res.send(filteredBooks)
    } catch (error) {
      
    }
  })

 
 
  

  app.delete("/deleteUsers", async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
  
      if (!email) {
        res.status(400).json({ message: "User email is required" });
        return;
      }
  
      const userChecking = await pool.query("SELECT id FROM users WHERE email=$1", [email]);
      if (userChecking.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
        return;
      }
  
      await pool.query("DELETE FROM users WHERE email=$1", [email]);
  
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  


  const updateUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
  
      const emailCheck = await pool.query("SELECT id FROM users WHERE email =$1", [email]);
      if (emailCheck.rows.length === 0) {
        res.status(400).json({ message: "User not found" });
        return;
      }
  
      // Hash new password before updating
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const updatedUser = await pool.query(
        "UPDATE users SET name=$1, password=$2 WHERE email=$3 RETURNING *",
        [name, hashedPassword, email]
      );
  
      res.status(200).json({
        message: "User updated successfully",
        user: updatedUser.rows[0],
      });
    } catch (error) {
      console.error("Internal error", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  app.put("/update", updateUser);
  