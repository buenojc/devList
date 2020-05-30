import React from 'react';
import { FormWrapper, Input, Label, Btn } from './style';

class Form extends React.Component {
  render() {
    return (
      <FormWrapper onSubmit={this.props.submit}>
        <Label>{this.props.label}</Label>
        <Input
          type='text'
          placeholder={this.props.placeholder}
          onChange={this.props.change}
        />
        <Btn type='submit'>Pesquisar</Btn>
      </FormWrapper>
    );
  }
}

export default Form;
