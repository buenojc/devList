import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import MainWrapper from '../../containers/MainWrapper';
import { Title } from './styles';
import Form from '../../components/Form';

export default function Home() {
  const navigation = useHistory();
  const [id, setId] = useState('');

  async function getId(e) {
    e.preventDefault();
    navigation.push(`/profile/${id}`);
  }

  return (
    <ContentWrapper>
      <Helmet>
        <title>DevList</title>
      </Helmet>
      <Header />
      <MainWrapper>
        <Title>
          <h1>
            Liste os repositórios e informações de qualquer usuário do Github
          </h1>
          <p>Veja o perfil, contato e repositórios</p>
        </Title>

        <Form
          label='Escreva o nome do usuário'
          placeholder='ex: mestreYoda'
          change={(e) => setId(e.target.value)}
          submit={getId}
        />
      </MainWrapper>
    </ContentWrapper>
  );
}
