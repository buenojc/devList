import React from 'react';
import { Div } from './styles';
import Container from '../../containers/Container';
import Title from '../../components/Title';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Div>
          <Title>Home</Title>
        </Div>
      </Container>
    );
  }
}

export default Home;
