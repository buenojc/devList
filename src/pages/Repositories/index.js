import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [repoList, setRepoList] = useState([]);
  const [repoName, setRepoName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        ` https://api.github.com/users/${id}/repos`
      );
      setRepoList(response.data);

      return;
    }

    fetchData();
  }, [id]);

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
            <h2>{repoName}</h2>
            {repoList.map((repo) => (
              <RepositoryHeader
                key={repo.id}
                github={repo.html_url}
                details={`/details/${repo.full_name}`}
                repositoryName={repo.name}
                language={repo.language}
                value={repo.stargazers_count}
              />
            ))}
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
