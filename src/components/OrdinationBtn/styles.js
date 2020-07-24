import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60px;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 5px 5px;
  cursor: pointer;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.2;
  }

  svg + svg {
    margin-left: 5px;
  }
`;
