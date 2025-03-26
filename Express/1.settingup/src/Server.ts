import  express  from "express";
import dotenv from "dotenv";



//configure the dotenv

dotenv.config();

//insatnce of express
const app = express();

//Load the variables
const  port = process.env.PORT
console.log(port)

const data = ["John", "mark", "Kevin"]

//Creating a get request saying Hello World!

app.get('/', (req, res)=>  {
    console.log('Server has read');
    
    res.send(`Hello World!, Be humble to us`)
})
//http://127.0.0.1:3000/dashboard
app.get('/dashboard', (req,res)=> {
    console.log("Ohh I hit the /dashboard endpoint")
    res.send('hi')
})
//http://127.0.0.1:3000/html
app.get("/html", (req,res) => {
    console.log("✅👌👌Working well")
    res.send("<h1>This is a html heading</h1> <input/>")
})
//http://127.0.0.1:3000/data
app.get('/data', (req,res) =>  {
    console.log("This is for data❤️❤️")
    res.send(data)
})





// create a server
//http://127.0.0.1:3000
app .listen(port, () => {
    console.log(`Server is running on port ${port}`)
}) 