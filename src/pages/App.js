import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Unofficial GitHub Browser v0.1</h1>
				{this.props.children}
			</div>
		);
	}
}

export default App;

