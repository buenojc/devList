import React from 'react';
import { H1 } from './style';

class Title extends React.Component {
  render() {
    return <H1>{this.props.title}</H1>;
  }
}

export default Title;
