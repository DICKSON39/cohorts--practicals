// import chalk from "chalk";

// console.log(chalk.yellow("intro"));
// function flagBookPages(book) {
//   const { title, pages, genre } = book;
//   //console.log(book)
//   if (pages >= 500) {
//     console.log(chalk.blue(title));
//     console.log(chalk.red(`Caution: More than 500 Pages`));
//   } /*else {
//         console.log(chalk.yellow(`This book has not met the criteria: ${title}`))
//     }*/
//   if (genre === "Dystopian") {
//     console.log(chalk.red(title));
//     console.log(chalk.green(`Caution: Dystopian Future`));
//   }
// }

// function summarize(books) {
//   // Create an array of formatted books
//   console.log(chalk.yellow("Summarrize Books"));
//   let summaries = [];
//   books.map((book) => {
//     const { title, author, genre, pages } = book;
//     summaries.push(`${title},-by ${author},- ${genre} - ${pages}`);
//   });
//   console.log(chalk.blue(summaries));

//   console.log(chalk.yellow("Filtered Books"));
//   const oldBooks = books.filter(checkYear);
//   oldBooks.map((book) => {
//     const { title, year } = book;
//     console.log(chalk.red(`${title}, == ${year}`));
//   });
// }
// function sortBooks(books, sortMethod = "title", order = "asc", inputGenre) {
//   let sortedBooks;

//   if (sortMethod === "title") {
//     sortedBooks = books.sort((a, b) => {
//       if (a.title < b.title) {
//         return order === "asc" ? -1 : 1;
//       }
//       if (a.title > b.title) {
//         return order === "asc" ? 1 : -1;
//       }
//       return 0;
//     });
//   } else if (sortMethod === "year") {
//     if (order === "asc") {
//       sortedBooks = books.sort((a, b) => a.year - b.year);
//     } else if (order === "desc") {
//       sortedBooks = books.sort((a, b) => b.year - a.year);
//     }
//   } else if (sortMethod === "pages") {
//     if (order === "asc") {
//       sortedBooks = books.sort((a, b) => a.pages - b.pages);
//     } else if (sortMethod === "desc") {
//       sortedBooks = books.sort((a, b) => b.pages - a.pages);
//     }
//   } else if (sortMethod === "genre") {
//     sortedBooks = books.filter((book) => checkGenre(book, inputGenre));
//   }
//   console.log(chalk.blue("/nSorted Books"));
//   sortedBooks.map((book) => {
//     console.log(`${book.year} - ${book.pages} - ${book.title}`);
//   });
// }

// function checkYear(book) {
//   const { year } = book;
//   return year < 1950;
// }

// function checkGenre(book, inputGenre) {
//   const { genre } = book;
//   return genre === inputGenre;
// }

// // The function takes book as input
// // we destructure to get the object(year) in array
// // it checks if the year is less than 1950

// function processBooks(books) {
//   books.map((book) => flagBookPages(book));
//   summarize(books);
//   sortBooks(books, "title", "asc");
// }
// async function fetchBooks() {
//   // const response = await fetch('http://localhost:3000/books')

//   // if(!response.ok){
//   //     console.log('an error occured while fetching data')
//   // }
//   // const data = await response.json();
//   // console.log(data)

//   //

//   try {
    
//     const response = await fetch("http://localhost:3000/books");
//     const data = await response.json();
//     processBooks(data);
//   } catch (error) {
//     console.error(`An error occured: ${error}`);
//   }
// }

// fetchBooks();
const API_URL = "http://localhost:3000/books";

// Fetch books and populate dropdown
async function fetchBooks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        const books = await response.json();
        populateDropdown(books);
        displayBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        document.getElementById("bookList").innerHTML = "<p>Error loading books.</p>";
    }
}

// Populate dropdown with book titles
function populateDropdown(books) {
    const dropdown = document.getElementById("titleDropdown");
    dropdown.innerHTML = '<option value="">Select a Book</option>'; // Default option

    books.forEach(({ title }) => {
        const option = document.createElement("option");
        option.value = title;
        option.textContent = title;
        dropdown.appendChild(option);
    });
}

// Display books on the webpage
function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    if (books.length === 0) {
        bookList.innerHTML = "<p>No books found.</p>";
        return;
    }

    books.forEach(({ title, author, genre, year, pages, image }) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
        
            <h3>${title}</h3>
            <img src="${image}" alt="${title}">
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Genre:</strong> ${genre}</p>
            <p><strong>Year:</strong> ${year}</p>
            <p><strong>Pages:</strong> ${pages}</p>
            <button class="buy-btn">Buy Now</button>
        `;
        bookList.appendChild(bookElement);
    });
}

// Apply filters including dropdown selection
function applyFilters() {
    const selectedTitle = document.getElementById("titleDropdown").value;
    const genre = document.getElementById("genreFilter").value;
    const minYear = document.getElementById("yearFilter").value;
    const minPages = document.getElementById("pageFilter").value;
    const sortBy = document.getElementById("sortBy").value;

    fetch(API_URL)
        .then(response => response.json())
        .then(books => {
            let filteredBooks = books;

            if (selectedTitle) {
                filteredBooks = filteredBooks.filter(book => book.title === selectedTitle);
            }
            if (genre) {
                filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
            }
            if (minYear) {
                filteredBooks = filteredBooks.filter(book => book.year >= minYear);
            }
            if (minPages) {
                filteredBooks = filteredBooks.filter(book => book.pages >= minPages);
            }

            // Sorting books
            filteredBooks.sort((a, b) => {
                if (sortBy === "year" || sortBy === "pages") {
                    return a[sortBy] - b[sortBy];
                }
                return a.title.localeCompare(b.title);
            });

            displayBooks(filteredBooks);
        })
        .catch(error => console.error("Error filtering books:", error));
}

// Load books and populate dropdown on page load
fetchBooks();


