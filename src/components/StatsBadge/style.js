import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #00938a;
  padding: 10px 10px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  svg {
    min-width: 20px;
    min-height: 20px;
  }

  svg + p {
    margin-left: 5px;
  }
`;

export const Value = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin-top: 3px;
`;
