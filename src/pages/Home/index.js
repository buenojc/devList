import React from 'react';
import { useHistory } from 'react-router-dom';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import MainWrapper from '../../containers/MainWrapper';
import Title from '../../components/Title';
import { P } from './styles';
import Form from '../../components/Form';

function Home() {
  const navigation = useHistory();
  function alert(e) {
    e.preventDefault();
    navigation.push('/profile');
  }

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
        />
      </MainWrapper>
    </ContentWrapper>
  );
}

export default Home;
