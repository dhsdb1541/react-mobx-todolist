import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

export default
@inject('store')
@observer
class TodoItem extends Component {
  // @action onRemove=
  render() {
    const { checked, info, store } = this.props;

    return (
      <div className="todo-item">
        <div
          className="remove"
          onClick={() =>
            // e.stopPropagation(); //onToggle 방지
            store.todoStore.onRemove(info.id)
          }
        >
          &times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>{info.text}</div>
      </div>
    );
  }
}
