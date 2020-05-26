import React from 'react';
import ContentWrapper from '../../containers/ContentWrapper';
import Header from '../../containers/Header';
import Avatar from '../../avatar.jpeg';
import Title from '../../components/Title';
import StatsBadge from '../../components/StatsBadge';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { NavigationWrapper } from '../../containers/NavigationWrapper';
import LinkBtn from '../../components/LinkBtn';
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
            <StatsBadge value={1} icon={<FiUsers />} />
            <StatsBadge value={1} icon={<FiUserPlus />} />
          </BadgeContainer>

          <Bio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
            architecto hic recusandae aut reiciendis commodi adipisci iste
            debitis, excepturi vel unde minus enim laboriosam voluptas sunt
            dolor voluptatum porro!
          </Bio>

          <LinkBtn url='/repositories' text='Veja todos os repositórios' />
          <NavigationWrapper>
            <SearchBtn />
          </NavigationWrapper>
        </MainWrapper>
      </ContentWrapper>
    );
  }
}

export default Profile;
