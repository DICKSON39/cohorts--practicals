import { BorrowRequest } from "./borrowType";

export interface bookCopies {
    copy_id: number,
    book_id: number,
    inventory_number?: number,
    condition?: string,
    status?: string,
    location?:string 
}


