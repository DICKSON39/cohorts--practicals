import { UserRequest } from "./user";


export interface Book {
    book_id?: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    pages: number;
    publisher: string;
    description: string;
    price: number;
    total_copies: number;
    available_copies: number;
  }

  export interface BookRequest extends UserRequest {
    params: {
        id:string;
    };
    book?:Book
  }