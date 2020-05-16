import React from 'react';
import { Wrapper, Value } from './style';

class StatsBadge extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.icon}
        <Value>{this.props.value}</Value>
      </Wrapper>
    );
  }
}

export default StatsBadge;
