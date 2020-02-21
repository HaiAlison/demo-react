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
		console.log(this.state);
	}

	handleSubmit = login =>{

		DataLink('login',this.state).then((result) => {
			let responseJSON = result;
			console.log(responseJSON);
		});
		this.setState({isRedirect: false}); //chuyển trang
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