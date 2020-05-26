import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Name, NameWrapper, InfoWrapper } from './styles';
import StatsBadge from '../StatsBadge';
import { FiStar, FiGithub } from 'react-icons/fi';

class Repository extends React.Component {
  render() {
    return (
      <Item>
        <NameWrapper>
          <a href={this.props.github} target='_blank'>
            <StatsBadge icon={<FiGithub size={25} color='white' />} />
          </a>
          <Name>{this.props.repositoryName}</Name>
        </NameWrapper>
        <InfoWrapper>
          <StatsBadge value={this.props.value} icon={<FiStar />} />
          <StatsBadge value={this.props.language} />

          <Link to={this.props.details}>
            <p>Ver mais</p>
          </Link>
        </InfoWrapper>
      </Item>
    );
  }
}

export default Repository;
