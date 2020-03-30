import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <li className="list-group-item justify-content-between my-3 d-flex">
                <h6>Title</h6>
                <div className="todo-icon">
                    <a className="mx-2 text-success" href="#"><span>Edit</span></a>
                    <a className="mx-2 text-danger" href="#"><span>Delete</span></a>
                </div>
            </li>
        )
    }
}
