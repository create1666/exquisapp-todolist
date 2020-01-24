import React, { Component } from 'react'

export default class Todo extends Component {
  
    render() {
        const{title} = this.props.todo
        return (
            
            <div>
                <h3 className="card text-center bg-warning p-2 border-bottom  ">
				<input type="checkbox" className="checkbox-light float-left xl" /><span>{title}</span>
				<button type="button" className="btn btn-danger float-right">
					Delete
				</button>
			</h3>
            </div>
        )
    }
}

