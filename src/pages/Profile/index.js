import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import StatsBadge from '../../components/StatsBadge';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { NavigationWrapper } from '../../containers/NavigationWrapper';
import LinkBtn from '../../components/LinkBtn';
import SearchBtn from '../../components/SearchBtn';
import {
  ImgWrapper,
  InfoWrapper,
  AvatarImg,
  MainWrapper,
  BadgeContainer,
  Bio,
} from './style';

export default function Profile() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [followers, setfollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`https://api.github.com/users/${id}`);

      setName(result.data.name);
      setUser(result.data.login);
      setfollowers(result.data.followers);
      setFollowing(result.data.following);
      setAvatar(result.data.avatar_url);
      setBio(result.data.bio);

      return;
    }
    fetchData();
  }, [id]);

  return (
    <ContentWrapper>
      <Header />
      <MainWrapper>
        <ImgWrapper>
          <AvatarImg src={avatar} alt='Imagem de perfil' />
        </ImgWrapper>

        <InfoWrapper>
          <h1>{name}</h1>
          <p>{user}</p>
        </InfoWrapper>

        <BadgeContainer>
          <StatsBadge value={followers} icon={<FiUsers />} />
          <StatsBadge value={following} icon={<FiUserPlus />} />
        </BadgeContainer>

        <Bio>{bio}</Bio>

        <LinkBtn
          url={`/repositories/${id}`}
          text='Veja todos os repositórios'
        />
        <NavigationWrapper>
          <SearchBtn />
        </NavigationWrapper>
      </MainWrapper>
    </ContentWrapper>
  );
}
