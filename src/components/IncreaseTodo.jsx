import React, { Component } from 'react';

class IncreaseTodo extends Component {
	render() {
		return (
			<div>
				<form>
					<input className="form-control" type="text" placeholder="Type here todo..." />
					<button className="form-control btn-secondary" type="submit" >SUBMIT TODO</button>
				</form>
			</div>
		);
	}
}
export default IncreaseTodo;
