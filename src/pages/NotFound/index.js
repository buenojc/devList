import React from 'react';
import Header from '../../containers/Header';
import { Wrapper, HomeBtn } from './styles';
import { Link } from 'react-router-dom';

export default function notFound() {
  return (
    <Wrapper>
      <Header />
      <h1>404</h1>
      <h3>IHH...não encontrei esta página</h3>

      <Link to='/'>
        <HomeBtn>Clique aqui para pesquisar um usuário</HomeBtn>
      </Link>
    </Wrapper>
  );
}
