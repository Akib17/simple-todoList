import React, { Component } from 'react';
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

    if (this.state.item === '') {
      alert('Please add your task')
    } else {
      if (localStorage.getItem('lists') == null) {
        const lists = []
        lists.push(...this.state.items, newItem)
        localStorage.setItem('lists', JSON.stringify(lists))
      } else {
        const lists = JSON.parse(localStorage.getItem('lists'))
        lists.push(newItem)
        localStorage.setItem('lists', JSON.stringify(lists))
      }
    }

    this.setState({
      item: '',
      id: uuid(),
      items: JSON.parse(localStorage.getItem('lists')),
      editItem: false
    })
    
  }
  handleDeleteItem = (id) => {
    const allItems = JSON.parse(localStorage.getItem('lists'))
    const filterItems = allItems.filter(item => item.id !== id)
    let result = window.confirm('Are you sure?')
    if (result) {
      this.setState({
        items: filterItems
      })
    } else {
      return false
    }
    localStorage.setItem('lists', JSON.stringify(filterItems))
  }
  handleEdit = id => {
    const allItems = JSON.parse(localStorage.getItem('lists'))
    const filterItems = allItems.filter(item => item.id !== id)
    const selectedItem = allItems.find(item => item.id === id)
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      editItem: true
    })
    localStorage.setItem('lists', JSON.stringify(filterItems))
  }
  removeDatabase = () => {
    localStorage.clear()
    return localStorage.setItem('lists', JSON.stringify([]))
  }
  clearList = () => {
    let result = window.confirm('Are you sure?')
    if (result) {
      this.setState({
        items: []
      })
      this.removeDatabase()
    } else {
      return false
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput
            items={this.state.items}
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