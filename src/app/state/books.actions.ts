import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Load Books':emptyProps(),
    'Add Book': props<{ book:Book}>(),
    'Remove Book': props<{ bookId:string}>(),
    'Load Book Success': props<{ bookId: string }>(),

  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});