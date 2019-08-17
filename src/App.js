import React, { Component } from 'react';

import Input from './Input';
import PhoneInfoList from './PhoneInfoList';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { inject, observer } from 'mobx-react';
import { observable, action } from 'mobx';
export default
@inject('store')
@observer
class App extends Component {
  id = 3;
  state = {
    input: '',
    todos: [{ id: 0, text: '리액트 소개', checked: false }, { id: 1, text: '리액트 소개', checked: true }, { id: 2, text: '리액트 소개', checked: false }]
  };

  // id = 2;
  // state = {
  //   number: 0,

  //   todos: [
  //     {
  //       id: 0,
  //       todo: 'ㅎㅇ'
  //       // name: '아이앤비앰',
  //       // phone: '010-9536-5780',
  //     },
  //     {
  //       id: 1,
  //       todo: 'ㅎㅇ'
  //       // name: '이온유',
  //       // phone: '010-0000-0000',
  //     }
  //   ]
  // };

  // handleIncrease = () => {
  //   this.setState({
  //     number: this.state.number + 1
  //   });
  // };
  // handleCreate = data => {
  //   console.log(data);
  //   this.setState({
  //     todos: this.state.todos.concat({
  //       id: this.id++,
  //       ...data
  //     })
  //   });
  // };

  // handleRemove = id => {
  //   this.setState({
  //     todos: this.state.todos.filter(info => info.id !== id)
  //   });
  // };

  // handleUpdate = (id, data) => {
  //   this.setState({
  //     todos: this.state.todos.map(info => (id === info.id ? { ...info, ...data } : info))
  //   });
  // };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = e => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleRemove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: nextTodos
    });
  };
  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;
    return (
      <>
        {/* <Input onCreate={this.handleCreate} /> */}
        {/* <PhoneInfoList data={this.state.todos} onRemove={this.handleRemove} onUpdate={this.handleUpdate} /> */}
        {/* {JSON.stringify(this.state.information)} */}
        {/* {this.state.information} */}
        {/* <span>{this.state.number}</span> */}
        {/* <button onClick={this.handleIncrease}>+</button> */}
        <TodoListTemplate form={<Form value={input} onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} />}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
      </>
      // <div>
      //   <form>
      //     <input onChange={this.handleChange} />
      //     <button onClick={this.handleSubmit}>제출하기</button>
      //   </form>
      //   <button onClick={this.handleSubmit}>제출하기</button>
      // </div>
    );
  }
}
