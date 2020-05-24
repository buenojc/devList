import React from 'react';
import { Item, Name } from './styles';
import StatsBadge from '../StatsBadge';
import { FaStar } from 'react-icons/fa';

class Repository extends React.Component {
  render() {
    return (
      <Item>
        <Name>{this.props.repositoryName}</Name>
        <div>
          <a href='#'>Ver no Github</a>
          <StatsBadge value={this.props.value} icon={<FaStar />} />
          <StatsBadge value={this.props.language} />
        </div>
      </Item>
    );
  }
}

export default Repository;
