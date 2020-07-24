import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #00938a;

  @media (max-width: 900px) {
    padding: 15px 10px 30px 10px;
    flex-direction: column;
  }
`;

export const Name = styled.p`
  padding: 20px;
  text-align: left;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  width: 450%;

  @media (max-width: 900px) {
    width: initial;
    padding: 0;
    margin: 20px 0;
    text-align: center;
  }
`;

export const NameWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  a div p {
    display: none;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 0;

    a {
      display: block;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0;
    margin-top: 30px;
  }
`;

export const BadgesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    justify-content: center;
    margin-top: 20px;

    > div {
      width: 100%;
    }
  }
`;

export const SeeMore = styled.p`
  display: flex;
  background-color: #fff;
  height: 100%;
  border-radius: 10px;
  color: #00938a;
  font-weight: bold;
  margin-left: 15px;
  width: 200px;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-left: 0;
    min-width: 100%;
    padding: 10px 0;
    margin-top: 10px;
  }

  &:hover {
    opacity: 0.7;
  }

  a {
    color: #00938a;
  }
`;
