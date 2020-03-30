import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const { item, onChangeHandler, submitHandler, editItem } = this.props
        return (
            <div className="col-10 col-md-8 offset-md-1 mx-auto">
                <div className="card mt-5">
                    <form className="p-3" onSubmit={submitHandler}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Add a Item"
                                value={item}
                                onChange={onChangeHandler} />
                        </div>
                        <button className={
                            editItem ? "btn btn-success btn-block" : "btn btn-info btn-block"
                        }>
                            {
                                editItem ? 'Edit Item' : 'Add Item'
                            }
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
