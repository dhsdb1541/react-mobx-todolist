import { observable, action } from 'mobx';
import Axios from 'axios';

export default class todoStore {
  @observable todos = [];

  @observable todoStoreInformation = [{ id: 0, text: '리액트 소리', checked: false }, { id: 1, text: '리액트 소개', checked: true }, { id: 2, text: '리액트 소개', checked: false }];

  @action getTodo = () => {
    Axios.get('http://localhost:9000/todos/alltodos').then(res => {
      console.log(res.data);
      // console.log('todos', this.todos.push(res.data));
      // console.log('todos:', this.todos);
      // console.log(res, this.state.todos[0]._id);
    });
  };

  @action onRemove = id => {
    this.todoStoreInformation = this.todoStoreInformation.filter(todo => todo.id !== id);
    console.log(id);
  };
}
