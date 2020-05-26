import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';

class SearchBtn extends React.Component {
  render() {
    return (
      <Link to='/'>
        <Wrapper>
          <FaSearch />
        </Wrapper>
      </Link>
    );
  }
}

export default SearchBtn;
