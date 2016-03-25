import React from 'react';
import ajax from 'superagent';
import Word from './Word';

class Wordlist extends React.Component{

	componentWillMount() {
		ajax.get(`http://localhost:8080/words/getWordList?book=${this.props.params.book}&chapter=${this.props.params.chapter}`)
	.end(
		(error,response) => {
			if(!error && response) {
				this.setState({words:response.body});
			}else {
				console.logt('error fetching data',error);
			}
		}
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			words:[]
		}
	}	
	
		
		
		
	render() {
		const content = this.state.words.map(
			(word,index) => {
				return (
						<Word key={index} word={word.word} id={word.id}/>
					);
			}
			
			);
		return <div>{content}</div>;

	}

}

export default Wordlist;
