import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  margin: 60px auto 0;
  color: #fff;

  div + div {
    margin-left: 15px;
  }

  & > p {
    margin-bottom: 60px;
  }

  & > a {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    background-color: #00938a;
    color: #fff;
    transition: opacity 300ms;
    text-align: center;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #00938a;
  padding: 10px;
  margin-bottom: 70px;

  div {
    display: flex;
  }
`;

export const Name = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  text-align: justify;
`;
