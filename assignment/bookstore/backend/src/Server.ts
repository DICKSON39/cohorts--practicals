import express, {Request, Response, NextFunction} from "express"
import dotenv from 'dotenv'
import { readFileSync } from "fs"
import path from 'path'
import cors from "cors"
import { books } from "./books"
import { title } from "process"

//configure the dotenv 
//top most level
dotenv.config()

//instance of express
//the second most top level
const app = express()

//load the variables
const port = process.env.PORT 
const secret = process.env.SECRET
console.log(port) //3000
//console.log(secret) //a_very_strong_secret_for_you


//eneable CORS for all origins  
//app.use(cors())

//enable cors with optiosn (RECOMMENDED)
//To allow only http://localhost:5173:
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, PUT,DELETE",
    credentials: true //allows cookies and auth headers
}))

//get the current  directory 
const _dirname = path.resolve()

//synchronously read the file
const eventData = readFileSync(
    path.join(_dirname, "src", "db", "eventsData.json"), "utf-8"
)

//console.log(eventData)


// Sample Event Data

  const myBooks = books

//a simple get request saying hello world  
app.get('/', (req, res) => {
    res.send(`Hello World, Be humble to us`)
})

app.get('/api/eventsData', (req, res) => {
    //res.send(eventData)
})


//Now, let's create a GET API route that filters events based on query parameters
app.get('/api/eventsFilter', (req:Request, res:Response) => {
    try {
        const {name, genre, price,year, pages} = req.query

        //on the first filters, the whole evets havent been filtered
        let filteredBooks = [...myBooks]

        //filtering logic
        if(name) {
            filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes((title as string).toLowerCase()))
        }
        
        if (genre) {
           filteredBooks=filteredBooks.filter((book) => book.genre.toLowerCase().includes((genre as string).toLowerCase()))
        }
        if(price) {
            const priceNum = parseFloat(price as string)
            filteredBooks = filteredBooks.filter((book) => book.price === priceNum)
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

// create server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

app.get('/api/events/:title/:genre/:price', (req:Request, res:Response) => {
    const {title, genre, price} = req.params
    res.send(`Title: ${title}, Genre: ${genre}, Price: ${price}`)
})


//Routes params




app.get('/api/events/:id?', (req:Request, res:Response) => {
    const eventId = req.params.id;

    if (eventId) {
        try{
            const eventId = Number(req.params.id)
            if(isNaN(eventId)) {
                res.status(400).json({message: "Invalid event ID"})
                return;
            }

            const event = myBooks.find((event) => event.id === eventId)

            if(!event) {
                res.status(404).json({message: "Event not found"})
                return;
            }

            res.json(event)
        } catch (error) {
            console.error("Error fetching event by ID:", error)
            res.status(500).json({message: "Internal server error"})
        }


    } else {
        res.send(myBooks)
    }
})

//creating an add to cart



let cart: { title: string; price: number; quantity: number }[] = [];

app.get('/api/events/addingCart', (req: Request, res: Response) => {
    try {
        const { name, price } = req.query;

        // Validate query parameters
        if (!name || !price) {
             res.status(400).json({ message: "Missing required fields: name or price" });
             return
        }

        function AddTCart(book: { title: string }, price: number) {
            let index = cart.findIndex((item) => item.title === book.title);
            if (index === -1) {
                cart.push({ title: book.title, price: Number(price), quantity: 1 });
                console.log("Added to cart");
            } else {
                cart[index].quantity++;
            }
        }

        // Convert query parameters to correct types
        AddTCart({ title: String(name) }, Number(price));

     res.json({ message: "Item added to cart", cart });
     return 
    } catch (error) {
        console.error("Error adding to cart:", error);
         res.status(500).json({ message: "Internal Server Error" }); 
         return
         
    }
});