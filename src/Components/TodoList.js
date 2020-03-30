import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDeleteItem, handleEdit } = this.props
        const listItems = JSON.parse(localStorage.getItem('lists'))
        // console.log(listItems);
        return (
            <div className="col-10 col-md-8 offset-md-1 mx-auto text-center">
                <div className="list-group my-4">
                    <h2>ToDo List</h2>
                    {
                        listItems.map(item => {
                            return (
                                <TodoItem
                                    handleDeleteItem={() => handleDeleteItem(item.id)}
                                    handleEdit={() => handleEdit(item.id)}
                                    key={item.id}
                                    title={item.title}></TodoItem>
                            )
                        })
                    }
                    <button onClick={clearList} className="btn btn-danger mt-3">
                        Clear List
                </button>
                </div>
            </div>
        )
    }
}
