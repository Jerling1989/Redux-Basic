// IMPORT REACT AND REDUX METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CREATE BOOKDETAIL CLASS COMPONENT
class BookDetail extends Component {
	render() {
		// IF THIS.PROPS.BOOK DOESN'T EXIST YET RETURN EARLY
		if (!this.props.book) {
			return <h3>Select a book</h3>;
		}
		// RETURN BOOK TITLE INFO
		return (
			<div>
				<h3>Details For:</h3>
				<h5>Title: {this.props.book.title}</h5>
				<h6>Pages: {this.props.book.pages}</h6>
			</div>
		);
	}
}

// FUNCTION TO MAP THE STATE OF THE APP
function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

// CREATE CONTAINER BY CONNECTING COMPONENT TO REDUX REDUCERS
export default connect(mapStateToProps)(BookDetail);