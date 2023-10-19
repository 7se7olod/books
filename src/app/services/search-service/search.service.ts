import { Injectable } from '@angular/core';
import {Book} from "../../models/book";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchBooks(searchBook: string, allBooks: Book[]): Book[] {
    return allBooks.filter(
        item => item.title.trim().toLowerCase().includes(searchBook.trim().toLowerCase()) ||
          item.subtitle.trim().toLowerCase().includes(searchBook.trim().toLowerCase())
      );
  }
}
