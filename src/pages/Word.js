import React from 'react';
import ajax from 'superagent';

class Word extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			show:true
		}
	}

	onClick() {
		console.log('clicked');
		ajax.get(`http://localhost:8080/words/removeWord?id=${this.props.id}`)
	.end((error, response) => {
		if(!error && response) {
			console.log(response.body);
			if(response.body === true) {
				this.setState({show:false});
			}
		}else {
			console.log('error submit data',error);
		}
	});
	}

	render() {
		return (<div class="display:inline">
			{this.state.show ? <button onClick={this.onClick.bind(this)}>{this.props.word}</button> : null}
			</div>);
	}

}

export default Word;

