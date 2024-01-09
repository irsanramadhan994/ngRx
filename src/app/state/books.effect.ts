import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/books.service';
import {  BooksApiActions } from './books.actions';

@Injectable()
export class BooksEffect {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType('[Books] Load Books'),
    mergeMap(() => this.booksService.getBooks()
      .pipe(
        map(books => BooksApiActions.retrievedBookList({books})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {}
}