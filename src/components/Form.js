import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';

export default
@inject('store')
@observer
class Form extends Component {
  @observable input = '';
  id = 3;
  @action.bound onChange(e) {
    const { name, value } = e.target;
    console.log('value', value, 'name', name);
    this.input = e.target.value;
  }

  @action onCreate = e => {
    const {
      todoStore: { todoStoreInformation }
    } = this.props.store;

    todoStoreInformation.push({
      todo: this.input,
      checked: false
    });
    this.addTodo();
    console.log(todoStoreInformation, 1);
  };
  @action addTodo = () => {
    Axios.post('http://localhost:9000/todos/addtodo', { todo: this.input }).then(res => {
      console.log(res.data);
      this.props.store.todoStore.getTodo();
    });
  };
  @action onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onCreate();
    }
  };

  render() {
    const { value, onChange, onCreate, onKeyPress } = this.props;
    const {
      todoStore: { todos, todoStoreInformation }
    } = this.props.store;

    // console.log(todos);
    // console.log(todoStoreInformation);

    return (
      <div className="form" onSubmit={e => onCreate(e)}>
        <input onChange={this.onChange} onKeyPress={this.onKeyPress} name="input" />
        <button type="submit" className="create-button" onClick={this.onCreate}>
          작성하기
        </button>
      </div>
    );
  }
}
