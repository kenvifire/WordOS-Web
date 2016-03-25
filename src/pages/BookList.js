import React from 'react';
import {Link} from 'react-router';
import ajax from 'superagent';
import Wordlist from './Wordlist';

class BookList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		}
	}

	
	componentWillMount() {
		ajax.get('http://localhost:8080/words/getBookList')
			.end(
				(error, response) => {
					if(!error && response) {
						    this.setState({ books: response.body });
					}else {
						console.log('error when fetching data', error);
					}
				}
			);

	}	

	render() {
		
		const content = this.state.books.map(
					(book, index) => {
						return <p><Link to={`book/${book.book}`} >{book.book}</Link></p>
					}
				);
		return <div>{content}</div>;
	}
		

}

export default BookList;
	

