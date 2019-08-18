import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';

export default
@inject('store')
@observer
class Form extends Component {
  @observable input = '';

  @action.bound onChange(e) {
    const { name, value } = e.target;
    console.log('value', value, 'name', name);
    this[name] = value;
  }

  @action onCreate = e => {
    // todos.push({
    //   todo: this.input,
    //   checked: false
    // });
    this.addTodo();
    console.log(this.input);
    this.input = null;
    console.log(this.input);
  };

  @action addTodo = () => {
    Axios.post('http://localhost:9000/todos/addtodo', { todo: this.input }).then(res => {
      console.log(res.data);
      this.props.store.todoStore.getTodo();
    });
    // this.onChange. = '';
  };

  @action onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onCreate();
      e.target.value = '';
    }
  };

  render() {
    return (
      <div className="form">
        <input onChange={this.onChange} onKeyPress={this.onKeyPress} name="input" />
        <button
          type="submit"
          className="create-button"
          onClick={() => {
            this.onCreate();
          }}
        >
          작성하기
        </button>
      </div>
    );
  }
}
