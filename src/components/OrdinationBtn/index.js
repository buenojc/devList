import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Wrapper } from './styles';

class Dropdown extends React.Component {
  render(props) {
    return (
      <Wrapper onClick={this.props.onClickBtn}>
        {this.props.order}
        <AiFillStar size={20} color='white' />
      </Wrapper>
    );
  }
}

export default Dropdown;
