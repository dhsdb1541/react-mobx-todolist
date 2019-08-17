import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
  // static defaultProps = {
  //   data: []
  // };
  render() {
    const list = this.props.data.map(info => <PhoneInfo key={info.id} info={info} onRemove={this.props.onRemove} onUpdate={this.props.onUpdate} />);
    return <ul>{list}</ul>;
  }
}
