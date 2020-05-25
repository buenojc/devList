import React from 'react';
import { Wrapper } from './styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export default function ReturnBtn() {
  const history = useHistory();
  function handleReturn() {
    history.goBack();
  }

  return (
    <Wrapper onClick={handleReturn}>
      <FaArrowLeft size={16} />
    </Wrapper>
  );
}
