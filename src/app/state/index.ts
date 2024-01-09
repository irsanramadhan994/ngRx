import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromBooks from './collection.reducer';
  
  export interface State {
    users: fromBooks.State;
  }
  
  export const reducers: ActionReducerMap<State> = {
    users: fromBooks.collectionReducer,
  };
  
  export const selectUserState = createFeatureSelector<fromBooks.State>('collection');
  
  export const selectUserIds = createSelector(
    selectUserState,
    fromBooks.selectUserIds // shorthand for usersState => fromBooks.selectUserIds(usersState)
  );
  export const selectUserEntities = createSelector(
    selectUserState,
    fromBooks.selectUserEntities
  );
  export const selectAllUsers = createSelector(
    selectUserState,
    fromBooks.selectAllUsers
  );
  export const selectUserTotal = createSelector(
    selectUserState,
    fromBooks.selectUserTotal
  );
  export const selectCurrentUserId = createSelector(
    selectUserState,
    fromBooks.getSelectedUserId
  );
  
  export const selectCurrentUser = createSelector(
    selectUserEntities,
    selectCurrentUserId,
    (userEntities, userId) => userId && userEntities[userId]
  );