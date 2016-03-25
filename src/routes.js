import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import List from './pages/List';
import Detail from './pages/Detail';
import User from './pages/User';
import Word from './pages/Word';
import Wordlist from './pages/Wordlist';
import BookList from './pages/BookList';
import Book from './pages/Book';

const routes = (
	<Route path="/" component={ App } >
		<IndexRoute component={ List } />
		<Route path="detail/:repo" component={ Detail } />
		<Route path="user/:login" component={ User } />
		<Route path="word/:word" component= { Word } />
		<Route path="wordlist/:book/:chapter" component = { Wordlist } />
		<Route path="booklist/" component = { BookList} />
		<Route path="book/:book" component = { Book } />	
		
	</Route>
);

export default routes;
