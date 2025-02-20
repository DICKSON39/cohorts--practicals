/*What is a Callback?﻿
In JavaScript, a callback is a function that is passed into another function as an 
argument and is executed after some operation or event completes.Callbacks are a 
fundamental concept in asynchronous programming, allowing you to handle the result of an 
asynchronous operation once it is finished.They are commonly used to handle tasks such as 
reading files, making network requests, or processing data.*/

function add(a, b) {
    return a + b;
}

// Function that uses a callback
function addCallback(z, callbackFn) {
    return callbackFn(z, 6);
}

// Calling the function with a callback
console.log(addCallback(10, add)); // Outputs: 16

/* In this example:

add is a function that adds two numbers.

addCallback takes a number z and a callback function callbackFn. It applies callbackFn to z and 6.

When addCallback is called with 10 and the add function, it adds 10 and 6 to get 16. */

/*Array Methods with Callbacks﻿
Callbacks are also used in array methods like .map(): */
const arr = [1, 2, 3, 4, 5].map((num) => num * 2);
console.log(arr); // Outputs: [2, 4, 6, 8, 10]
/* In this example:

The .map() method takes a callback function that doubles each number in the array.

The callback function (num) => num * 2 is applied to each element of the array.
*/

// Callback in Asynchronous operations:

// Simulate logging into Netflix
function loginUser(email, password, callbackFn) {
    setTimeout(() => {
        console.log("We have logged into Netflix");
        callbackFn({ userEmail: email });
    }, 3000);
}

// Simulate getting recently watched videos
function recentlyWatchedVideo({ userEmail }, callbackFn) {
    setTimeout(() => {
        console.log("We have all the recently watched videos");
        callbackFn({
            userEmail,
            videos: ["Star Wars", "The Mando", "The Lord of The Rings"],
        });
    }, 3000);
}

// Simulate getting details of one video
function getDetailsOfOneVideo(videos, callbackFn) {
    setTimeout(() => {
        console.log("We are getting the details of one video");
        callbackFn({ video: videos.videos[1] });
    }, 3000);
}

// Execute the sequence of asynchronous operations
loginUser("job@gmail.com", "password", (user) => {
    console.log(user);

    recentlyWatchedVideo(user, (videos) => {
        console.log(videos);

        getDetailsOfOneVideo(videos, (videoDetails) => {
            console.log("This is the info of: ", videoDetails.video);
        });
    });
});

/*In this example:

loginUser simulates an asynchronous login process and calls its callback once the login is successful.

recentlyWatchedVideo is called with the logged-in user and its callback provides recently watched videos.

getDetailsOfOneVideo takes the list of videos and its callback retrieves details of one video. */

//Callback hell
/* When callbacks are nested deeply, it can lead to a situation known as 
"callback hell" or "pyramid of doom," making the code hard to read and maintain. 
In complex scenarios, this can lead to deeply nested structures that are difficult to debug and manage.

Importance of Callbacks﻿
Handling Asynchronous Operations﻿
Callbacks allow you to handle the results of asynchronous operations. 
This is essential in web development where many operations, such as network requests and file reads, are asynchronous.

Non-Blocking Code Execution﻿
By using callbacks, you ensure that your application remains responsive. 
For instance, while waiting for a network request to complete, other parts of your application can continue to run.

Control Flow Management﻿
Callbacks provide a way to manage the flow of asynchronous operations.
 They help in chaining operations and ensuring that certain actions are performed only after previous tasks are completed.

Event Handling﻿
Callbacks are widely used in event-driven programming. For instance,
 in web development, callbacks handle user interactions like clicks, form submissions, and more.

Drawbacks of Callbacks﻿
While callbacks are a foundational technique in JavaScript for managing asynchronous operations,
 they come with certain drawbacks:

1. Callback Hell (Pyramid of Doom)﻿
Issue: When multiple asynchronous operations are chained together, callbacks can become deeply nested, 
leading to complex and hard-to-read code. This phenomenon is often referred to as "callback hell" or "pyramid of doom."

Impact: Deeply nested callbacks make the codebase difficult to maintain, debug, and extend.
 It can also lead to errors due to incorrect nesting or missing callbacks.

2. Error Handling Challenges﻿
Issue: Proper error handling in callback-based code can be cumbersome. 
Each callback needs its own error handling logic, which can lead to repetitive code.

Impact: Errors can be harder to track and manage, especially in deeply nested callback structures. 
This can result in unhandled errors and unpredictable application behavior.

3. Inconsistent Code Flow﻿
Issue: Callbacks can lead to inconsistent or fragmented code flow. Managing asynchronous 
operations in a sequential and readable manner is more challenging.

Impact: This inconsistency can make the code less intuitive and harder to follow, 
especially for developers unfamiliar with the codebase.

4. Difficulty in Debugging﻿
Issue: Debugging code with nested callbacks can be challenging due to its complexity. 
Tracing the flow of execution and identifying the source of errors can be difficult.

Impact: Debugging and fixing issues can take more time and effort, leading to longer development cycles.

Advantages of Promises and async/await﻿
To address the limitations of callbacks, JavaScript introduced Promises and async/await,
 which offer a more structured and readable approach to asynchronous programming:

1. Promises﻿
Improved Readability: Promises provide a cleaner syntax for chaining asynchronous operations using 
.then() and .catch(). This avoids deeply nested callbacks and makes the code more readable.

Error Handling: Promises allow centralized error handling. You can catch errors at any point in the
 promise chain using .catch(), making it easier to manage and handle errors.

State Management: Promises have three distinct states—pending, fulfilled, and rejected—which 
makes it easier to understand the outcome of asynchronous operations.

2. async/await﻿
Synchronous-like Code: The async/await syntax allows you to write asynchronous code that looks
 and behaves like synchronous code. This makes the code easier to read and reason about.

Simplified Error Handling: With async/await, you can use traditional try/catch blocks for error 
handling, providing a more familiar and straightforward way to manage errors.

Cleaner Code: async/await eliminates the need for chaining and nesting, resulting in cleaner and more maintainable code.*/

//Using callbacks
loginUser("email", "password", (user) => {
    recentlyWatchedVideo(user, (videos) => {
      getDetailsOfOneVideo(videos, (details) => {
        console.log("Video Details: ", details);
      });
    });
  });

  //using Promises
  loginUser("email", "password")
  .then(user => recentlyWatchedVideo(user))
  .then(videos => getDetailsOfOneVideo(videos))
  .then(details => console.log("Video Details: ", details))
  .catch(error => console.error("Error: ", error));

  //Using Async/Await
  async function fetchVideoDetails() {
    try {
      const user = await loginUser("email", "password");
      const videos = await recentlyWatchedVideo(user);
      const details = await getDetailsOfOneVideo(videos);
      console.log("Video Details: ", details);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  
  fetchVideoDetails();