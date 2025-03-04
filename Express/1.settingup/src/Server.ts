import  express  from "express";
import dotenv from "dotenv";


//configure the dotenv

dotenv.config();

//insatnce of express
const app = express();

//Load the variables
const  port = process.env.PORT
console.log(port)

//Creating a get request saying Hello World!

app.get('/', (req, res)=>  {
    res.send(`Hello World!, Be humble to us`)
})




// create a server

app .listen(port, () => {
    console.log(`Server is running on port ${port}`)
}) 