import React from 'react';
import { Link } from 'react-router-dom';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import Avatar from '../../avatar.jpeg';
import Title from '../../components/Title';
import StatsBadge from '../../components/StatsBadge';
import { FaUsers, FaUserPlus } from 'react-icons/fa';
import Button from '../../components/Button';
import SearchBtn from '../../components/SearchBtn';
import {
  ImgWrapper,
  AvatarImg,
  MainWrapper,
  BadgeContainer,
  Bio,
  Email,
} from './style';

class Profile extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <Header />
        <MainWrapper>
          <ImgWrapper>
            <AvatarImg src={Avatar} alt='Imagem de perfil' />
          </ImgWrapper>

          <Title marginTop={20} title='@buenojc' />
          <Email>buenojc@outlook.com</Email>

          <BadgeContainer>
            <StatsBadge value={1} icon={<FaUsers />} />
            <StatsBadge value={1} icon={<FaUserPlus />} />
          </BadgeContainer>

          <Bio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
            architecto hic recusandae aut reiciendis commodi adipisci iste
            debitis, excepturi vel unde minus enim laboriosam voluptas sunt
            dolor voluptatum porro!
          </Bio>

          <Button text='Veja todos os repositórios' />
          <Link to='/'>
            <SearchBtn />
          </Link>
        </MainWrapper>
      </ContentWrapper>
    );
  }
}

export default Profile;
