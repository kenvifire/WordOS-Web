import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import routes from './routes';
import Card from './pages/Card';

ReactDOM.render(
	<Router history={createHistory( { queryKey: false} )}
		onUpdate={() => window.scrollTo(0, 0)}>
			{routes}
	</Router>,
	document.getElementById('app')
);
