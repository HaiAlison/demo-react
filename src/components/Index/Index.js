import React, { Component } from 'react';
import Header from '../Header/Header';
import EventList from '../EventList/EventList';
export class Index extends Component {
	render() {
		return (
			<>
			<Header />
			<EventList />
			</>
		);
	}
}
export default Index;