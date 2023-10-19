import {Injectable} from '@angular/core';
import {Book} from "../../models/book";

@Injectable({
  providedIn: 'root'
})
export class SortService {
  sortBooksByTitle(books: Book[], ascending: boolean): Book[] {
    return books.sort((a, b) => {
      if (ascending) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  }

  sortBooksByPrice(books: Book[], ascending: boolean): Book[] {
    return books.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return ascending ? priceA - priceB : priceB - priceA;
    });
  }
}
