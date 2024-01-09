import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selector';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';
import { Observable } from 'rxjs';
import { Book } from './book-list/books.model';
import { selectAllUsers } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$: Observable<ReadonlyArray<Book>> = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectAllUsers);

  onAdd(book:Book) {
    this.store.dispatch(BooksActions.addBook({ book }));
    console.log(this.bookCollection$)
  }

  onRemove(bookId:string) {
    
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {

    this.store.dispatch(BooksActions.loadBooks())
  }
}