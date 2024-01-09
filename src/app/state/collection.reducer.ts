import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/books.model';
import { BooksActions } from './books.actions';
import { selectBookCollection, selectBooks } from './books.selector';


export interface State extends EntityState<Book> {
  // additional entity state properties
  selectedUserId: string | null;
}


export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});





export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
   {
    return adapter.removeOne(bookId,state)
   }
  ),
  on(BooksActions.addBook, (state, { book }) => {
    
    return adapter.addOne(book,state)

  })
);


export const getSelectedUserId = (state: State) => state.selectedUserId;
 
// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
 
// select the array of user ids
export const selectUserIds = selectIds;
 
// select the dictionary of user entities
export const selectUserEntities = selectEntities;
 
// select the array of users
export const selectAllUsers = selectAll;
 
// select the total user count
export const selectUserTotal = selectTotal;