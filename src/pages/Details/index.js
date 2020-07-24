import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ContentWrapper from '../../containers/ContentWrapper';
import MainWrapper from '../../containers/MainWrapper';
import Header from '../../containers/Header';
import { Wrapper, Title, Name } from './styles';
import StatsBadge from '../../components/StatsBadge';
import { FiStar } from 'react-icons/fi';
import { NavigationWrapper } from '../../containers/NavigationWrapper';
import ReturnBtn from '../../components/ReturnBtn';
import SearchBtn from '../../components/SearchBtn';

function Details() {
  const { id, repo } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.github.com/repos/${id}/${repo}`
      );
      setData(response.data);
    }

    fetchData();
  }, [id]);

  return (
    <ContentWrapper>
      <Header />
      <MainWrapper>
        <Wrapper>
          <Title>
            <Name>{data.name}</Name>
            <div>
              <StatsBadge value={data.stargazers_count} icon={<FiStar />} />
              <StatsBadge
                value={data.language === null ? 'Markdown' : data.language}
              />
            </div>
          </Title>
          <p>{data.description}</p>

          <a href={data.html_url} target='_blank'>
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
