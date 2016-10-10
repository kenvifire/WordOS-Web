import React from 'react';
import ajax from 'superagent';
import {Link} from 'react-router';
import Wordlist from './Wordlist';

var Config = require('Config')


class Book extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			chapters:[]
		}
	}	

	componentWillMount() {
		ajax.get(`${Config.serverUrl}/words/getChapter?book=${this.props.params.book}`)
		.end(
			(error, response) => {
				if(!error && response) {
					this.setState({
						chapters:response.body
					});
				} else {
					console.log('error when fetching data', error);
				}
			}
		);
	}	

	render() {
		const content = this.state.chapters.map(
				(chapter, index) => {
					return (<p><Link to={`/Wordlist/${this.props.params.book}/${chapter}`}>{this.props.params.book} Chapter {chapter}</Link></p>);
				}
			);
		return <div>{content}</div>
				
	}

}

export default Book;
