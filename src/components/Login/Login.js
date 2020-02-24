import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {DataLink} from '../DataLink/PostData';
export class Login extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			lastname: '',
			registration_code: '',
			isRedirect: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange= this.handleChange.bind(this);
	}
	


	handleChange = login =>{
		this.setState({[login.target.name]: login.target.value});
	}

	handleSubmit = login =>{
		if(this.state.lastname && this.state.registration_code){
		DataLink('login',this.state).then((result) =>{
			
			console.log(result.data);
			if(result.status === 200){
				let resJSON = JSON.stringify(result.data);
				console.log("login successful");
				sessionStorage.setItem('userData', resJSON);
				this.setState({isRedirect: true});
			}
			else 
				{console.log("Login error");} });
		}
		login.preventDefault(); //ngăn load lại trang
	
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
					<input id="inputEmail" name="lastname" onChange={this.handleChange} className="form-control" placeholder="Lastname" autoFocus  /><br/>
					<label htmlFor="inputPassword" style={{float:"left"}}>Registration Code </label>
					<input type="password" id="inputPassword" onChange={this.handleChange}  name="registration_code" className="form-control" placeholder="Code" />
					<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
					</form>
					);
			}
		}
		export default Login;

