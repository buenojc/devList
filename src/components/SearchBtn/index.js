import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Wrapper } from './style';

class SearchBtn extends React.Component {
  render() {
    return (
      <Wrapper>
        <FaSearch />
      </Wrapper>
    );
  }
}

export default SearchBtn;
