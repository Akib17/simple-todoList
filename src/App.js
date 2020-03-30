import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import ReactDom from 'react-router-dom'
import uuid from 'uuid'

function App() {
  const [items, setItems] = useState({
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  })
  const onChangeHandler = e => {
    setItems({
      item: e.target.value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()

    const newItem = {
      item: items.item,
      id: items.id
    }

    const updateItem = [...items.items, newItem]
    setItems({
      items: updateItem,
      item: '',
      id: '',
      editItem: false
    })
    
  }
  return (
    <div className="container">
      <div className="row">
        <TodoInput
          item={items.item}
          onChangeHandler={onChangeHandler}
          submitHandler={submitHandler}
        />
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
