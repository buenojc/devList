import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #00938a;

  div {
    display: flex;
    justify-content: space-evenly;

    a {
      margin-right: 20px;
      align-self: center;
      text-decoration: none;
      color: #fff;
      font-style: italic;
    }
  }
`;

export const Name = styled.p`
  color: #fff;
  font-weight: bold;
`;
