import React, { Component } from 'react';
import { Consumer } from '../context';

class IncreaseTodo extends Component {
	state = {
		id: Math.random,
		title: '',
		complete: false
	};
	update = (e) => {
		this.setState({ title: e.target.value });
	};
	add = (eventHandler, e) => {
		e.preventDefault();
		const newTodo = this.state;
		eventHandler({ type: 'ADD', payload: newTodo });
		this.setState({ title: '' });
		console.log(eventHandler
			);
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { eventHandler } = value;

					return (
						<form onSubmit={(e) => this.add(eventHandler,e)}>
							<input
								className="form-control"
								type="text"
								placeholder="Type here todo..."
								value={this.state.title}
								onChange={this.update}
							/>
							<button className="form-control btn-secondary" type="submit">
								SUBMIT TODO
							</button>
						</form>
					);
				}}
			</Consumer>
		);
	}
}
export default IncreaseTodo;
