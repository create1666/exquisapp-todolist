import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (prevState, newObject) => {
	if (newObject.type === 'TOGGLE') {
		return {
			todos: prevState.todos.map((t) => {
				if (t.id === newObject.payload) {
					t.complete = !t.complete;
				}
				return t;
			})
		};
	} else if (newObject.type === 'DELETE') {
		return { todos: prevState.todos.filter((t) => t.id !== newObject.payload) };
	} else {
		if (newObject.type === 'ADD') return { todos: [ ...prevState.todos, newObject.payload ] };
	}
	//return prevState;
};
export class Provider extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Attend my PPA',
				complete: true
			},
			{
				id: 2,
				title: 'check slack ',
				complete: true
			},
			{
				id: 3,
				title: 'visit dev.to',
				complete: false
			}
		],
		eventHandler: (newObject) => this.setState((prevState) => reducer(prevState, newObject))
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
