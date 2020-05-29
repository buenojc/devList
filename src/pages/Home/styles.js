import styled from 'styled-components';

export const Title = styled.div`
  h1 {
    font-size: 22px;
    margin-top: 100px;
    font-weight: 700;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 0 5px;

    @media (max-width: 550px) {
      margin-top: 60px;
      font-size: 18px;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 70px;
    color: #fff;

    @media (max-width: 450px) {
      margin-bottom: 45px;
    }
  }
`;
