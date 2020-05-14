import React from 'react';
import { Btn } from './style.js';

class Button extends React.Component {
  render() {
    return <Btn type={this.props.type}>{this.props.text}</Btn>;
  }
}

export default Button;
