import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div className="col-10 col-md-8 offset-md-1 mx-auto text-center">
                <div className="list-group my-4">
                    <h2>ToDo List</h2>
                    <TodoItem></TodoItem>
                    <button className="btn btn-danger mt-3">
                        Clear List
                </button>
                </div>
            </div>
        )
    }
}
