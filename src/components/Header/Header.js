import React, { Component } from 'react';
export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            namee: '',
            
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

    }
    handleLoginClick = () => {

        this.setState({isLoggedIn: true});
    } 
    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    componentWillMount() {
        if(sessionStorage.getItem("userData")){
         this.name = JSON.parse(sessionStorage.getItem("userData"));
       
         this.setState({namee: this.name});
           console.log(this.state.namee);
         this.setState({isLoggedIn: true});
     }
     else{ console.log("Not");
     this.setState({isLoggedIn: false});}
 }
 render() {
     const isLoggedIn = this.state.isLoggedIn;
     let button;
     if(isLoggedIn){
        console.log("Login");
        button = <LogoutButton onClick={this.handleLogoutClick} />;
    }
    else {
        console.log("Logout");
        button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (

        <main role="main" className="col-md-9 ml-sm-auto col-lg-12 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Event Booking Platform</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
        <div> {button}</div>
        </div>
        </div>
        </div>
        </main>
        
        
        );
    }
}


function LoginButton(props){
    return(
    <a href="/login" className="btn btn-sm btn-outline-secondary">Login</a>
    );
}
function LogoutButton(props){
    
    return(

    <button onClick={logout()} className="btn btn-sm btn-outline-secondary">Logout</button>
    )
}
function logout(){
        sessionStorage.setItem('userData','');
        sessionStorage.clear();
    }