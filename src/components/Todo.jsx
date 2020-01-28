import React, { Component } from 'react';
import { Consumer } from '../context';

export default class Todo extends Component {
	style = () => {
		const { complete } = this.props.todo;
		return { textDecoration: complete ? 'line-through' : 'none' };
	};

	toggle = (id, eventHandler) => {
		eventHandler({ type: 'TOGGLE', payload: id });
	};
	deleteBtn = (id, eventHandler) => {
		eventHandler({ type: 'DELETE', payload: id });
	};
	render() {
		const { title, id } = this.props.todo;
		return (
			<Consumer>
				{(value) => {
					const { eventHandler } = value;
					return (
						<div>
							<h3 className="card text-center bg-warning p-2 border-bottom">
								<input
									type="checkbox"
									className="checkbox-light float-left xl"
									onChange={() => this.toggle(id, eventHandler)}
								/>
								<span style={this.style()}>{title}</span>
								<button
									type="button"
									className="btn btn-danger float-right"
									onClick={() => this.deleteBtn(id, eventHandler)}
								>
									Delete
								</button>
							</h3>
						</div>
					);
				}}
			</Consumer>
		);
	}
}
