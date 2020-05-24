import React, { Component } from 'react';
import { ListWrapper, ListHeader, Ordination, BtnWrapper } from './styles';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import MainWrapper from '../../containers/MainWrapper';
import RepositoryHeader from '../../components/RepositoryHeader';
import SearchBtn from '../../components/SearchBtn';
import ReturnBtn from '../../components/ReturnBtn';

class Repositories extends Component {
  render() {
    return (
      <ContentWrapper>
        <Header />
        <MainWrapper>
          <ListWrapper>
            <ListHeader>
              <h1>Todos os repositórios de @buenojc</h1>
              <Ordination>
                <p>Ordenar por estrelas</p>
              </Ordination>
            </ListHeader>
            <ol>
              <RepositoryHeader
                repositoryName='Projeto 1'
                value='1'
                language='Javascript'
              />
              <RepositoryHeader
                repositoryName='Projeto 2'
                value='50'
                language='C++'
              />
              <RepositoryHeader
                repositoryName='Projeto 3'
                value='1'
                language='Java'
              />
            </ol>
          </ListWrapper>
          <BtnWrapper>
            <ReturnBtn />
            <SearchBtn />
          </BtnWrapper>
        </MainWrapper>
      </ContentWrapper>
    );
  }
}

export default Repositories;
