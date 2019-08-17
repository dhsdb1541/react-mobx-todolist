import React, { Component } from 'react';

export default class Input extends Component {
  state = {
    name: '',
    phone: '',
    todo: '',
    number: 0
  };
  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(this.state.input);
    this.setState({ [e.target.name]: value });
  };
  handleSubmit = e => {
    // console.log(e.target.value);
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({ todo: '' });
  };

  render() {
    console.log(this.state);
    // const { onChange, onClick } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="todo" onChange={this.handleChange} value={this.state.todo} name="todo" />
          {/* <input placeholder="전화번호" onChange={this.handleChange} value={this.state.phone} name="phone" /> */}
          <button type="submit">제출하기</button>
        </form>
        <div>
          {this.state.name} {this.state.phone}
        </div>
      </div>
    );
  }
}

// import React from 'react'

// export default ({onChange, onClick, name}) => {
//   return (
//     <div>
//         <form>
//           <input onChange={onChange} name={name} />
//           <button onClick={onClick}>제출하기</button>
//         </form>
//         {this.props.name}
//       </div>
//   )
// }
