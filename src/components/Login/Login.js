import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {DataLink} from '../DataLink/PostData';
export class Login extends Component {
	
	state = {
		lastName: '',
		registrationCode: '',
		isRedirect: false,
	};
	handleChange = login =>{
		this.setState({[login.target.name]: login.target.value});
		console.log(this.state);
	}

	handleSubmit = login =>{
		login.preventDefault(); //ngăn load lại trang
		DataLink('login',this.handleChange)
		.then((result) => {
			let responseJson = result;
			console.log(responseJson);
		})
		this.setState({isRedirect: false}); //chuyển trang
	}	
	render() {
		if(this.state.isRedirect){
			return <Redirect to="/" />;
		}
		return (
			<form className="form-signin" onSubmit={this.handleSubmit}>
			<div><h1 className="h3  font-weight-normal" style={{float:"left"}}>Login</h1></div>
			<br/>
			<br/>
			<br/>
			<label htmlFor="inputEmail" style={{float:"left"}}>Lastname</label>
			<input id="inputEmail" name="lastName" onChange={this.handleChange} className="form-control" placeholder="Lastname" autoFocus  /><br/>
			<label htmlFor="inputPassword" style={{float:"left"}}>Registration Code </label>
			<input type="password" id="inputPassword" onChange={this.handleChange}  name="registrationCode" className="form-control" placeholder="Code" />
			<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
			</form>
			);
	}
}
export default Login;