import React from 'react'
import ajax from 'superagent';


class User extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			events:[]			
		}
	}
	
	componentWillMount() {
		this.fetchUser(this.props.params.login);
	}

	render() {
			return <ul>
				{this.state.events.map((event, index) => {
					const eventType = event.type;
					const repoName = event.repo.name;
					const creationDate = event.created_at;
					return (<li key={index}>
						<strong>{repoName}</strong>: {eventType}
						at {creationDate}.
				</li>); })}
				</ul>; 
		}	
	
	fetchUser(user) {
		const baseURL = 'https://api.github.com/users';
		
		ajax.get(`${baseURL}/${user}/events`)
		.end((error, response) => {
			if(!error, response) {
				this.setState({events:response.body});
			}else {
				console.log(`Error fetching ${user}`,error);
			}
		});
	}
}

export default User;
