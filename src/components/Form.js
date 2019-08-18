import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';

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
    const {
      todoStore: { todos, todoStoreInformation }
    } = this.props.store;
  }
  @action onCreate = e => {
    const {
      todoStore: { todos, todoStoreInformation }
    } = this.props.store;

    todoStoreInformation.push({
      id: this.id++,
      text: this.input,
      checked: false
    });
    console.log(todoStoreInformation, 1);
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
        <button type="submit" className="create-button" onClick={this.onCreate} />
      </div>
    );
  }
}
