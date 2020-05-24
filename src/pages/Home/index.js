import React from 'react';
import { Link } from 'react';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import MainWrapper from '../../containers/MainWrapper';
import Title from '../../components/Title';
import { P } from './styles';
import Form from '../../components/Form';

function alert(e) {
  e.preventDefault();
  console.log('Funciona');
}

class Home extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <Header />
        <MainWrapper>
          <Title
            marginTop={100}
            title='Liste os repositórios e informações de qualquer usuário do Github'
          />
          <P>Veja o perfil, contato e repositórios</P>

          <Form
            label='Escreva o nome do usuário'
            placeholder='ex: mestreYoda'
            submit={(e) => alert(e)}
            btn='Pesquisar'
          />
        </MainWrapper>
      </ContentWrapper>
    );
  }
}

export default Home;
