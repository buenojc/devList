import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin: 50px auto 0;
  width: 70%;
  text-align: center;
  border: 1px solid #00938a;
  border-radius: 15px;

  ol {
    div + div {
      margin-left: 15px;
    }
  }

  & li:last-child {
    border: none;
  }
`;

export const ListHeader = styled.div`
  color: #fff;
  line-height: 20px;
  display: flex;
  justify-content: center;
  background-color: #00938a;
  padding: 20px 20px;
  border-radius: 10px;

  h1 {
    font-size: 18px;
    margin-right: auto;
  }
`;

export const Ordination = styled.div`
  right: 10px;
  cursor: pointer;
  margin-left: auto;

  p {
    font-size: 12px;
    font-weight: bold;
  }
`;
