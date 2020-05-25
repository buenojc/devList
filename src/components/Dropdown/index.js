import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Wrapper } from './styles';

class Dropdown extends React.Component {
  render() {
    return (
      <Wrapper>
        <p>Alterar ordenação {<FaArrowDown size={13} />}</p>
        <div>
          <li>Ordenar por Estrelas {<FaArrowUp size={12} />} </li>
          <li>Ordenar por Estrelas {<FaArrowDown size={12} />} </li>
          <li>Ordenar por Linguagem</li>
        </div>
      </Wrapper>
    );
  }
}

export default Dropdown;
