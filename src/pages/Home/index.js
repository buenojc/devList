import React from 'react';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import MainWrapper from '../../containers/MainWrapper';
import Title from '../../components/Title';
import { P } from './styles';

class Home extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <Header />
        <MainWrapper>
          <Title title='Liste os repositórios e informações de qualquer usuário do Github' />
          <P>Veja o perfil, contato e respositórios</P>
        </MainWrapper>
      </ContentWrapper>
    );
  }
}

export default Home;
