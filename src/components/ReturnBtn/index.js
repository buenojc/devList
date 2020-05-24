import React from 'react';
import { Wrapper } from './styles';
import { FaArrowLeft } from 'react-icons/fa';

class ReturnBtn extends React.Component {
  render() {
    return (
      <Wrapper>
        <FaArrowLeft size={16} />
      </Wrapper>
    );
  }
}

export default ReturnBtn;
