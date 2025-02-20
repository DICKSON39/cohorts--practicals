/**
 a) Synchronous vs. Asynchronous Execution
Synchronous: Executes line by line, blocking further execution until the current task completes.
Asynchronous: Allows tasks to execute without blocking the main thread.
Asynchronous Programming allows multiple tasks to be processed at the same time. Instead of waiting for one task to finish before starting another, JavaScript can handle several tasks concurrently.

Non-Blocking: Asynchronous code lets other operations run while waiting for a task to complete. For example, you can fetch data from a server without freezing the rest of your application.

Event-Driven: JavaScript uses an event loop to manage asynchronous tasks, ensuring that other code can run while waiting for a task to finish.
b) Event Loop
The event loop manages asynchronous operations in JavaScript.
It ensures non-blocking behavior by handling callbacks, promises, and event listeners.
2. Asynchronous Techniques in JavaScript
a) Callbacks (Older Method - Avoid Callback Hell)
A function passed as an argument to another function, executed once an async task is completed.
JavaScript Event Loop Explained
1. What is the Event Loop?
The event loop is a mechanism in JavaScript that handles asynchronous operations, allowing non-blocking execution. It enables JavaScript to run single-threaded while efficiently managing tasks like I/O operations, timers, and user interactions.

2. How the Event Loop Works
The event loop continuously checks and executes tasks from different queues. The key components of the event loop are:

Call Stack (Execution Stack) – Keeps track of function calls.
Web APIs – Handles async operations (setTimeout, fetch, DOM events, etc.).
Task Queue (Callback Queue / Macrotask Queue) – Stores callbacks from async operations.
Microtask Queue (Job Queue) – Stores promises and process.nextTick() in Node.js.
Event Loop – Moves tasks from the queues to the call stack when it's empty.
3. Event Loop Execution Order
Tasks are processed in this order:

1️⃣ Synchronous code (Call Stack execution)
2️⃣ Microtasks (Promise callbacks, process.nextTick in Node.js)
3️⃣ Macrotasks (setTimeout, setInterval, setImmediate, I/O callbacks)

4. Example: Understanding Execution Order
javascript
Copy code
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
Output Order:

javascript
Copy code
Start
End
Promise resolved
setTimeout
Explanation:

console.log("Start") executes synchronously.
setTimeout(..., 0) schedules a macrotask in the Task Queue.
Promise.resolve().then(...) schedules a microtask in the Microtask Queue.
console.log("End") executes synchronously.
The event loop runs and sees the Microtask Queue is not empty.
It executes Promise resolved before setTimeout, since microtasks have higher priority.
setTimeout executes from the Macrotask Queue.
5. Microtasks vs. Macrotasks
Type	Examples	Priority
Microtasks	Promise.then(), process.nextTick()	Higher
Macrotasks	setTimeout(), setInterval(), setImmediate(), I/O	Lower
Example: Microtask Priority
javascript
Copy code
setTimeout(() => console.log("Macrotask - setTimeout"), 0);
Promise.resolve().then(() => console.log("Microtask - Promise"));

console.log("Synchronous code");
Output:

javascript
Copy code
Synchronous code
Microtask - Promise
Macrotask - setTimeout
6. Node.js Event Loop
In Node.js, the event loop has extra phases:
1️⃣ Timers (setTimeout, setInterval)
2️⃣ I/O Callbacks
3️⃣ Idle/Prepare (Internal use)
4️⃣ Poll (Handles incoming connections, data)
5️⃣ Check Phase (setImmediate)
6️⃣ Close Callbacks

🔹 setImmediate() executes before setTimeout(0) in Node.js.

javascript
Copy code
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
Output (in Node.js):

arduino
Copy code
setImmediate
setTimeout
7. Key Takeaways
✅ JavaScript executes synchronous code first, then microtasks, and finally macrotasks.
✅ Microtasks (Promises, process.nextTick) run before macrotasks (setTimeout, setInterval).
✅ The event loop ensures JavaScript remains non-blocking and efficient.
 */

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((message) => {
    console.log(message);  // Output after 2 sec: Data received
});
