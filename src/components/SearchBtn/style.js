import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  svg {
    color: #00938a;
  }
`;
