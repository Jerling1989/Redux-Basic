// SELECT BOOK FUNCTION
export function selectBook(book) {
	// SELECTBOOK IS AN ACTION CREATOR, IT NEED TO RETURN AN ACTION,
	// AN OBJECT WITH A TYPE PROPERTY
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
