import { Book } from "./booksTypes";
import { UserRequest } from "./user";

export interface Borrow {
    user_id: number;
    copy_id: number;
    librarian_id: number;
    borrow_date: string;
    return_date: string;
    status: string; // 'Borrowed' | 'Returned' | 'Overdue'
  }


  export interface BorrowRequest extends UserRequest {
    params: {
        id: string
    }

    book? :Book
  }