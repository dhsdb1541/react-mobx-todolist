import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { value, onChange, onCreate, onKeyPress } = this.props;
    return (
      <div className="form">
        <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
        <button type="submit" className="create-button" onClick={onCreate} />
      </div>
    );
  }
}
