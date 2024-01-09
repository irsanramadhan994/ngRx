import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/books.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './state/books.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    BookCollectionComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    EffectsModule.forRoot([BooksEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
