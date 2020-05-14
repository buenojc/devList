import React from 'react';
import { FormWrapper, Input, Label } from './style';
import Button from '../Button';

class Form extends React.Component {
  render() {
    return (
      <FormWrapper onSubmit={this.props.submit}>
        <Label>{this.props.label}</Label>
        <Input type='text' placeholder={this.props.placeholder} />
        <Button type='submit' text={this.props.btn} />
      </FormWrapper>
    );
  }
}

export default Form;
