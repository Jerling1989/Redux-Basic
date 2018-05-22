// IMPORT REACT AND REDUX FUNCTIONS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// IMPORT LOCAL FUNCTIONS
import { selectBook } from '../actions/index';

// CREATE BOOKLIST CLASS COMPONENT
class BookList extends Component {
	// MAP THROUGH BOOKS ARRAY AND MAKE LIST ITEM FOR EACH BOOK OBJECT IN ARRAY
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			)
		});
	}
	// RENDER THE LIST OF BOOKS
	render() {
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// FUNCTION TO MAP THE STATE OF THE APP
function mapStateToProps(state) {
	// WHATEVER IS RETURNED WILL SHOW UP AS PROPS INSIDE OF BOOKLIST
	return {
		books: state.books
	};
}

// ANYTHING RETURNED FROM THIS FUNCTION WILL END UP AS PROPS ON THE BOOKLIST CONTAINER
function mapDispatchToProps(dispatch) {
	// WHENEVER SELECTBOOK IS CALLED, THE RESULT WILL BE PASSED TO ALL OF THE REDUCERS
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// PROMOTE BOOKLIST FROM A COMPONENT TO A CONTAINER, THEN EXPORT
// IT NEEDS TO KNOW ABOUT THE NEW DISPATCH METHOD SELECTBOOK. MAKE IT AVAILABLE AS A PROP
export default connect(mapStateToProps, mapDispatchToProps)(BookList);