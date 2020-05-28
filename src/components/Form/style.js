import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin: 0 auto;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  margin: 15px auto;
  width: 30%;
  padding: 10px;
  border: 3px solid #00938a;
  border-radius: 10px;
  color: #00938a;

  &::placeholder {
    font-style: italic;
    opacity: 1;
    color: #00938a;
  }

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Label = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;

export const Btn = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  background-color: #00938a;
  color: #fff;
  transition: opacity 300ms;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
