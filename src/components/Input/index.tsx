import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, StyledTextInput } from './styles';

type InputProps = {
  label?: string;
} & TextInputProps;

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      {label?.length && <Label>{label}</Label>}
      <StyledTextInput {...rest} />
    </Container>
  );
}
