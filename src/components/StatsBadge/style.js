import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #00938a;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  display: flex;
  margin: 0 auto;
  width: 60px;
  align-items: center;
  justify-content: center;

  span {
    width: 500px;
    overflow: hidden;
  }

  svg {
    width: 80%;
    box-sizing: border-box;
  }
`;

export const Value = styled.p`
  font-size: 14px;
  margin-top: 0;
  font-weight: bold;
`;
