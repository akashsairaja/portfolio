import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import App from './screens';

import './scss/style.scss';

const RootApp = () => (
	<Suspense
		fallback={
			<div className="preloader">
				<div className="centered loader loader-1">
					<div className="loader-outter"/>
					<div className="loader-inner"/>
				</div>
			</div>
		}
	>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={App}/>
				<Redirect to="/"/>
			</Switch>
		</BrowserRouter>
	</Suspense>
);

ReactDOM.render(<RootApp/>, document.getElementById('root-react'));
