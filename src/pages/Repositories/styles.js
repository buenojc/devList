import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin: 50px auto 0;
  width: 70%;
  text-align: center;
  border: 1px solid #00938a;
  border-radius: 15px;

  ol {
    div > div + div {
      margin-left: 15px;

      @media (max-width: 900px) {
        margin-left: 10px;
      }
    }

    @media (max-width: 900px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }

  & li:last-child {
    border: none;
  }

  @media (max-width: 1300px) {
    width: 100%;
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

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    h1 {
      margin-right: 0;
    }
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

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 20px;

    p {
      text-align: center;
    }
  }
`;
