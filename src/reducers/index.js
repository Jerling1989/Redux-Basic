// IMPORT METHODS
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// ROOT REDUCER
const rootReducer = combineReducers({
  books: BooksReducer
});

// EXPORT ROOT REDUCER
export default rootReducer;
