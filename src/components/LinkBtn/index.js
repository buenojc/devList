import React from 'react';
import { Btn } from './style.js';
import { Link } from 'react-router-dom';

class LinkBtn extends React.Component {
  render() {
    return (
      <Link to={this.props.url}>
        <Btn>{this.props.text}</Btn>
      </Link>
    );
  }
}

export default LinkBtn;
