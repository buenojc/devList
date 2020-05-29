import React from 'react';
import { Link } from 'react-router-dom';
import {
  Item,
  Name,
  NameWrapper,
  InfoWrapper,
  SeeMore,
  BadgesWrapper,
} from './styles';
import StatsBadge from '../StatsBadge';
import { FiStar, FiGithub } from 'react-icons/fi';

class Repository extends React.Component {
  render() {
    return (
      <Item>
        <NameWrapper>
          <a href={this.props.github} target='_blank'>
            <StatsBadge icon={<FiGithub size={20} color='white' />} />
          </a>
          <Name>{this.props.repositoryName}</Name>
        </NameWrapper>
        <InfoWrapper>
          <BadgesWrapper>
            <StatsBadge value={this.props.value} icon={<FiStar />} />
            <StatsBadge value={this.props.language} />
          </BadgesWrapper>

          <Link to={this.props.details}>
            <SeeMore>Ver mais</SeeMore>
          </Link>
        </InfoWrapper>
      </Item>
    );
  }
}

export default Repository;
