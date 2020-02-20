import React, { Component } from 'react';
export default class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
        this.handleShowHide = this.handleShowHide.bind(this)
    }
    handleShowHide = () => {
        const{show} = this.state;
        this.setState({show: !show})
    }
	render() {
		return (
		
			 <main role="main" className="col-md-9 ml-sm-auto col-lg-12 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Event Booking Platform</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <a href="/login" onClick={this.handleShowHide} 
                        className="btn btn-sm btn-outline-secondary">{this.state.show ? 'Logout' : 'Login'}</a>
                    </div>
                </div>
            </div>
        </main>
        
        
		);
	}
}
