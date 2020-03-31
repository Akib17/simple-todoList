import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title, handleDeleteItem, handleEdit, index } = this.props
        return (
            <li className="list-group-item rounded border justify-content-between d-flex my-2">
                <h6 className="text-capitalize" onDoubleClick={handleEdit}> {index + 1}. {title} </h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>Edit</span>
                    <span onClick={handleDeleteItem} className="mx-2 text-danger">Delete</span>
                </div>
            </li>
        )
    }
}
