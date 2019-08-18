import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

export default
@inject('store')
@observer
class TodoItem extends Component {
  // @action onRemove=
  render() {
    const { info, store } = this.props;

    return (
      <div className="todo-item">
        <div className="remove" onClick={() => store.todoStore.onRemove(info._id)}>
          &times;
        </div>
        <div className={`todo-text `}>{info.todo}</div>
        {/* <span>{info._id}</span> */}
        {/* ${checked && 'checked'} */}
      </div>
    );
  }
}
