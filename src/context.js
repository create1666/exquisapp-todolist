import React, { Component } from 'react';

const Context = React.createContext();

export  class Provider extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Attend my PPA',
				complete: false
			},
			{
				id: 2,
				title: 'check slack ',
				complete: false
			},
			{
				id: 3,
				title: 'visit dev.to',
				complete: false
			}
		]
	};
	render() {
		return (
			<div>
				<Context.Provider value={this.state}>{this.props.children}</Context.Provider>
			</div>
		);
	}
}

export const Consumer = Context.Consumer;
