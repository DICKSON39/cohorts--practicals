import {  books } from "./index";

interface FilteredBooks {
    id: number;
    title: string;
    description: string;
    pages: number;
    price: number;
    year: number;
    publisher: string;
    author: string;
    genre: string;
    image: string;
}

export function filterBooks(): FilteredBooks[] {
    const yearFilterElement = document.getElementById("yearFilter") as HTMLInputElement;
    const genreFilterElement = document.getElementById("genreFilter") as HTMLInputElement;
    const pagesFilterElement = document.getElementById("pagesFilter") as HTMLInputElement;

    const yearFilter = yearFilterElement ? yearFilterElement.value : "";
    const genreFilter = genreFilterElement ? genreFilterElement.value.toLowerCase() : "";
    const pagesFilter = pagesFilterElement ? pagesFilterElement.value : "";

    return books.filter(book => 
        [ 
            yearFilter === "" || book.year === parseInt(yearFilter),
            genreFilter === "" || book.genre.toLowerCase().includes(genreFilter),
            pagesFilter === "" || book.pages <= parseInt(pagesFilter)
        ].every(condition => condition) 
    );
    
}


filterBooks()

document.querySelectorAll(".filterBook").forEach((button) => {
    button.addEventListener("click", (event) => {
        const target = event.target as HTMLButtonElement; 
        const bookId = parseInt(target.getAttribute("data-id") || "0", 10); 
        if (bookId) {
            console.log(`Book with ID ${bookId} was clicked.`);
            
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    filterBooks;
});
