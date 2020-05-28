import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  margin: 40px auto 0;

  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;
