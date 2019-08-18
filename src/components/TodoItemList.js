import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { inject, observer } from 'mobx-react';

export default
@inject('store')
@observer
class TodoItemList extends Component {
  componentDidMount() {
    const { todoStore } = this.props.store;
    todoStore.getTodo();
  }
  render() {
    const { todoStore } = this.props.store;
    // const todoList = todoStore.todoStoreInformation.map((todo, i) => <TodoItem info={todo} key={i} />);
    const todoList = todoStore.todos.map((todo, i) => <TodoItem info={todo} key={i} />);
    return <div>{todoList}</div>;
  }
}
