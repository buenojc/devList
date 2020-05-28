import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  background-color: #00938a;
  padding: 50px;
  text-align: center;

  @media (max-width: 800px) {
    padding: 30px;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`;

export const Img = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 450px) {
    width: 150px;
  }
`;
