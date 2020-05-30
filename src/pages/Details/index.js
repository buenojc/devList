import React from 'react';
import ContentWrapper from '../../containers/ContentWrapper';
import MainWrapper from '../../containers/MainWrapper';
import Header from '../../containers/Header';
import { Wrapper, Title, Name } from './styles';
import StatsBadge from '../../components/StatsBadge';
import { FiStar } from 'react-icons/fi';
import { NavigationWrapper } from '../../containers/NavigationWrapper';
import ReturnBtn from '../../components/ReturnBtn';
import SearchBtn from '../../components/SearchBtn';

function Details(props) {
  return (
    <ContentWrapper>
      <Header />
      <MainWrapper>
        <Wrapper>
          <Title>
            <Name>calculadora-js</Name>
            <div>
              <StatsBadge value='50' icon={<FiStar />} />
              <StatsBadge value='Javascript' />
            </div>
          </Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            quisquam quibusdam beatae reprehenderit dignissimos. Ad quam,
            mollitia odio aspernatur possimus ab autem accusantium voluptates
            ipsum, nam temporibus illo, sapiente corporis?
          </p>

          <a href={props.url} target='_blank'>
            Ver no Github
          </a>

          <NavigationWrapper>
            <ReturnBtn />
            <SearchBtn />
          </NavigationWrapper>
        </Wrapper>
      </MainWrapper>
    </ContentWrapper>
  );
}

export default Details;
