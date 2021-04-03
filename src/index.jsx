import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Loader from './components/Loader';
import App from './screens';

import './scss/style.scss';

const RootApp = () => (
	<Suspense fallback={<Loader/>}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={App}/>
				<Redirect to="/"/>
			</Switch>
		</BrowserRouter>
	</Suspense>
);

ReactDOM.render(<RootApp/>, document.getElementById('root-react'));
