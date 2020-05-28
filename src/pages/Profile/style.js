import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  color: #fff;
  text-align: center;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const InfoWrapper = styled.div`
  h1 {
    font-size: 22px;
    margin-top: 20px;
    font-weight: 700;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    text-align: center;

    @media (max-width: 550px) {
      font-size: 18px;
    }
  }

  p {
    margin: 10px 0;
  }
`;

export const ImgWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 35px auto 0;
  overflow: hidden;

  @media (max-width: 700px) {
    width: 150px;
    height: 150px;
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
`;

export const BadgeContainer = styled.div`
  min-width: 160px;
  margin: 15px auto 0;
  display: flex;
  justify-content: center;

  div + div {
    margin-left: 15px;
  }
`;

export const Bio = styled.p`
  width: 60%;
  text-align: justify;
  margin: 50px auto;
  line-height: 23px;

  @media (max-width: 850px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;
