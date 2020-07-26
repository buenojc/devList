import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00938a;
  text-align: center;
  color: #fff;
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 80px;
    margin-top: 20vh;
  }

  h3 {
    margin-bottom: 50px;
    font-size: 23px;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 40px;
    }

    h3 {
      font-size: 18px;
    }
  }
`;

export const HomeBtn = styled.div`
  display: inline;
  border-radius: 10px;
  padding: 20px;
  background-color: #363636;
  color: white;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
