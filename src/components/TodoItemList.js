import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(todo => <TodoItem id={todo.id} text={todo.text} checked={todo.checked} onToggle={onToggle} onRemove={onRemove} key={todo.id} />);
    return <div>{todoList}</div>;
  }
}
