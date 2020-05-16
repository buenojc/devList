import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #00938a;
  padding: 10px 10px;
  border-radius: 10px;
  color: white;
  display: flex;
  min-width: 70px;
  column-gap: 5px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  svg {
    min-width: 20px;
    min-height: 20px;
  }
`;

export const Value = styled.p`
  display: block;
  min-width: 50%;
  font-size: 14px;
  margin-top: 0;
  font-weight: bold;
`;
