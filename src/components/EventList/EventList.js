import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

export default class EventList extends Component {
	state = {
		events: [],
		isLoading: true,
	};

	componentDidMount(){
		axios.get('http://localhost:8000/api/v1/events').then(result => {
			
			this.setState({events: result.data,
				isLoading: false});
		});
	}
	
	render() {
		const {isLoading, events} = this.state;
		
		return (
				// <ul> {this.state.events.map(events => <li key={events.id}>{events.name}</li>)}
				// 	</ul>

				<>
				{!isLoading ?(
					events.map(event => {

						const{  name, date, organizer} = event;
						return (

							<div className="row events">
							<div className="col-md-12">
							<div className="card mb-4 shadow-sm">
							<a href="events/detail.html" className="btn text-left event">
							<div className="card-body">
							<h5 className="card-title" key={name.toString()}>{name}</h5>
							<p className="card-subtitle">{organizer.name}</p>
							<p className="card-subtitle" key={date.toString()}><Moment format="MMMM D, YYYY">{date}</Moment></p>
							</div>
							</a>
							</div>
							</div>
							</div>
							);
						})):(
							<div>
								<div id="overlayer" /> 
								<div className="loader">  
									<div className="spinner-border text-primary" role="status">
										<span className="sr-only">Loading...</span>
									</div>
								</div>
							</div>
					)
				}
				</>      


				)
					}
				}