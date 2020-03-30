import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import uuid from 'uuid/v4'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      id: uuid(),
      item: '',
      editItem: false
    }
  }
  onChangeHandler = e => {
    this.setState({
      item: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()

    const newItem = {
      title: this.state.item,
      id: this.state.id
    }

    const updateItems = [...this.state.items, newItem]
    this.setState({
      item: '',
      id: uuid(),
      items: updateItems,
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDeleteItem = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItems
    })
  }
  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      editItem: true
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput
            editItem={this.state.editItem}
            item={this.state.item}
            onChangeHandler={this.onChangeHandler}
            submitHandler={this.submitHandler}
          />
          <TodoList handleDeleteItem={this.handleDeleteItem} clearList={this.clearList} items={this.state.items} handleEdit={this.handleEdit}></TodoList>
        </div>
      </div>
    );
  }
}

export default App;