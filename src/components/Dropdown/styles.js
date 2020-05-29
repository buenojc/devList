import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;
  text-align: right;
  position: relative;
  width: 200px;

  p {
    font-size: 15px;
  }

  li {
    margin-bottom: 10px;
    text-align: center;
    font-size: 15px;
    border-bottom: 1px solid #fff;

    &:hover {
      opacity: 0.5;
    }
  }

  li:first-of-type {
    margin-top: 20px;
  }

  div {
    right: -10px;
    display: none;
    position: absolute;
    background-color: #00938a;
    width: 100%;
    border-radius: 10px;
    padding: 0 10px;

    &:hover {
      display: block;
    }

    @media (max-width: 500px) {
      right: 0;
    }
  }

  &:hover div {
    display: block;
  }
`;
