import React, { Component } from 'react';

import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { inject, observer } from 'mobx-react';

export default
@inject('store')
@observer
class App extends Component {
  componentDidMount() {
    this.props.store.todoStore.getTodo();
  }
  render() {
    return (
      <>
        <TodoListTemplate form={<Form />}>
          <TodoItemList />
        </TodoListTemplate>
      </>
    );
  }
}
// state = {
//   input: ''
//   // todos: [{ id: 0, text: '리액트 소개', checked: false }, { id: 1, text: '리액트 소개', checked: true }, { id: 2, text: '리액트 소개', checked: false }]
// };
// @observable input = '';

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
// @action handleChange = e => {
//   this.setState({
//     input: e.target.value
//   });
// };

// @action handleCreate = e => {
//   const { input, todos } = this.state;
//   this.setState({
//     input: '',
//     todos: todos.concat({
//       id: this.id++,
//       text: input,
//       checked: false
//     })
//   });
// };

// @action handleKeyPress = e => {
//   if (e.key === 'Enter') {
//     this.handleCreate();
//   }
// };

// @action handleRemove = id => {
//   this.setState({
//     todos: this.state.todos.filter(todo => todo.id !== id)
//   });
// };

// @action handleToggle = id => {
//   const { todos } = this.state;
//   const index = todos.findIndex(todo => todo.id === id);
//   const selected = todos[index];

//   const nextTodos = [...todos];

//   nextTodos[index] = {
//     ...selected,
//     checked: !selected.checked
//   };
//   this.setState({
//     todos: nextTodos
//   });
// };

// const { todos } = this.state;

// {
//   /* <Input onCreate={this.handleCreate} /> */
// }
// {
//   /* <PhoneInfoList data={this.state.todos} onRemove={this.handleRemove} onUpdate={this.handleUpdate} /> */
// }
// {
//   /* {JSON.stringify(this.state.information)} */
// }
// {
//   /* {this.state.information} */
// }
// {
//   /* <span>{this.state.number}</span> */
// }
// {
//   /* <button onClick={this.handleIncrease}>+</button> */
// }
// <div>
//   <form>
//     <input onChange={this.handleChange} />
//     <button onClick={this.handleSubmit}>제출하기</button>
//   </form>
//   <button onClick={this.handleSubmit}>제출하기</button>
// </div>
