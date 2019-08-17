import React, { Component } from 'react';

export default class PhoneInfo extends Component {
  // static defaultProps = {
  //   info: {
  //     id: 0,
  //     todo: 'hello'
  //   }
  // };
  state = {
    editing: false,
    name: '',
    phone: ''
  };
  handleRemove = () => {
    this.props.onRemove(this.props.info.id);
  };

  handleToggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { id, todo } = this.props.info;
    return (
      <li>
        {/* <div>{id}</div> */}
        <div>{todo}</div>
        <button onClick={this.handleRemove}>삭제</button>
      </li>
    );
  }
}
