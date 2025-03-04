
//synchronous programming is blocking  - one function has be to executed before the other one
///connecting to a database
function connectDB(db) {
    //code for connecting to the db
}

function fetchData() {
    connectDB(mongoDBInstance)
    //fetching data

}

//Asynchronous programming is none blocking
// Non-Blocking: Asynchronous code lets other operations run while waiting for a task to complete. For example, you can fetch data from a server without freezing the rest of your application.
async function connectDB(db) {
    //code for connecting to the db
    await connectURL
    //do exeception handlings
    //NoNetworks, DB deleted, 
}

async function fetchData() {
    await connectDB(mongoDBInstance)
    //fetching data

}

 fetchData()


//you can handle asynchronous operations using
//1: callbacks
//2: promises
//3: async/await


fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


  async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json(); // Convert response to JSON
        console.log(users);
    } catch (error) {
        console.log("Error fetching users:", error);
    }
}

getUsers();


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 3000);
    });
}

