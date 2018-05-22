// IMPORT REACT OBJECT AND METHODS
import React, { Component } from 'react';
// IMPORT CONTAINER
import BookList from '../containers/book_list';

// EXPORT MAIN APP COMPONENT
export default class App extends Component {
	// RENDOR THE COMPONENT
  render() {
    return (
      <div>
      	<BookList />
      </div>
    );
  }
}
