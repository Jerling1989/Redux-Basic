// IMPORT METHODS
import { combineReducers } from 'redux';
// IMPORT REDUCERS
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'; 

// CREATE ROOT REDUCER (COMBINED REDUCERS)
// ANY KEY ADDED TO ROOTREDUCER WILL BECOME KEY TO GLOBAL APP STATE
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

// EXPORT ROOT REDUCER
export default rootReducer;
