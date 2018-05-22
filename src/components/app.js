// IMPORT REACT OBJECT AND METHODS
import React, { Component } from 'react';
// IMPORT CONTAINERS
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';


// EXPORT MAIN APP COMPONENT
export default class App extends Component {
	// RENDOR THE COMPONENT
  render() {
    return (
      <div>
      	<BookList />
      	<BookDetail />
      </div>
    );
  }
}
