import React, { Component } from 'react';

import Index from '../Index/Index';
import Login from '../Login/Login';
import Error from '../Error/Error';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
export class RouterURL extends Component {
	render() {
		return (
			<Router> 
				<div>
				<Switch> //wrap route và 
					<Route exact path="/" component={Index} />
					<Route path="/login" component={Login} />
					<Route component={Error} />
				</Switch>
				</div>
			</Router>
		);
	}
}
export default RouterURL;