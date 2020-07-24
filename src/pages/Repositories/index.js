import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ListWrapper, ListHeader, Ordination } from './styles';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import MainWrapper from '../../containers/MainWrapper';
import RepositoryHeader from '../../components/RepositoryHeader';
import OrdinationBtn from '../../components/OrdinationBtn';
import { NavigationWrapper } from '../../containers/NavigationWrapper';
import SearchBtn from '../../components/SearchBtn';
import ReturnBtn from '../../components/ReturnBtn';

export default function Repositories() {
  const [repoList, setRepoList] = useState([]);
  const [sort, setSort] = React.useState('A');
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        ` https://api.github.com/users/${id}/repos`
      );
      setRepoList(response.data);
    }
    fetchData();
  }, [id]);

  const changeSort = () => setSort(sort === 'A' ? 'D' : 'A');

  const torder = repoList.sort((a, b) => {
    const v1 = a.stargazers_count;
    const v2 = b.stargazers_count;
    return sort === 'A' ? v1 - v2 : v2 - v1;
  });

  return (
    <ContentWrapper>
      <Helmet>
        <title>Repositórios de {id} | DevList</title>
      </Helmet>
      <Header />
      <MainWrapper>
        <ListWrapper>
          <ListHeader>
            <h1>Todos os repositórios de {id}</h1>
            <Ordination>
              <OrdinationBtn
                onClickBtn={() => changeSort()}
                order={
                  sort === 'A' ? (
                    <FaArrowUp size={18} />
                  ) : (
                    <FaArrowDown size={18} />
                  )
                }
              />
            </Ordination>
          </ListHeader>
          <ol>
            {torder.map((repo) => (
              <RepositoryHeader
                key={repo.id}
                github={repo.html_url}
                details={`/details/${repo.full_name}`}
                repositoryName={repo.name}
                language={repo.language == null ? 'Markdown' : repo.language}
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
