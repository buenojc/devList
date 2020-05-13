import React from 'react';
import { Wrapper, Img } from './styles';
import Logo from '../../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img src={Logo} />
      </Wrapper>
    );
  }
}

export default Header;
