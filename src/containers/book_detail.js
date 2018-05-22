// IMPORT REACT AND REDUX METHODS
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CREATE BOOKDETAIL CLASS COMPONENT
class BookDetail extends Component {
	render() {
		return (
			<div>Book Detail</div>
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
export default connect(mapStateToProps)(BookDetailo);