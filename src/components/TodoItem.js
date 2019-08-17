import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); //onToggle 방지
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>{text}</div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}
