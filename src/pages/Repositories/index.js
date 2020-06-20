import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { ListWrapper, ListHeader, Ordination } from './styles';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import MainWrapper from '../../containers/MainWrapper';
import RepositoryHeader from '../../components/RepositoryHeader';
import Dropdown from '../../components/Dropdown';
import { NavigationWrapper } from '../../containers/NavigationWrapper';
import SearchBtn from '../../components/SearchBtn';
import ReturnBtn from '../../components/ReturnBtn';

export default function Repositories() {
  const { id } = useParams();

  return (
    <ContentWrapper>
      <Header />
      <MainWrapper>
        <ListWrapper>
          <ListHeader>
            <h1>Todos os repositórios de {id}</h1>
            <Ordination>
              <Dropdown />
            </Ordination>
          </ListHeader>
          <ol>
            <RepositoryHeader
              github='http://github.com'
              details='/details'
              repositoryName='Projeto 1'
              value='1'
              language='Javascript'
            />
            <RepositoryHeader
              details='/details'
              repositoryName='Projeto 2'
              value='50'
              language='C++'
            />
            <RepositoryHeader
              details='/details'
              repositoryName='Projeto 3'
              value='1'
              language='Java'
            />
          </ol>
        </ListWrapper>
        <NavigationWrapper>
          <ReturnBtn />
          <SearchBtn />
        </NavigationWrapper>
      </MainWrapper>
    </ContentWrapper>
  );
}
