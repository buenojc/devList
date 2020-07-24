import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Img } from './styles';
import Logo from '../../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to='/'>
          <Img src={Logo} alt='Logo' />
        </Link>
      </Wrapper>
    );
  }
}

export default Header;
