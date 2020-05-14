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
`;

export const Label = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`;
