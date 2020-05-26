import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #00938a;
`;

export const Name = styled.p`
  padding: 20px;
  text-align: left;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  width: 450%;
`;

export const NameWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  a div p {
    display: none;
  }
`;

export const InfoWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;

  a {
    background-color: #fff;
    padding: 10px 10px;
    border-radius: 10px;
    color: #00938a;
    font-weight: bold;
    font-size: 14px;
    margin-left: 15px;
    width: 200px;

    &:hover {
      opacity: 0.7;
    }

    p {
      margin-top: 3px;
    }
  }
`;
