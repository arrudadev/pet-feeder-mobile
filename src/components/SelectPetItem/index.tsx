import React from 'react';

import { Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { Container, Divider, Title } from './styles';

type Props = {
  title: string;
};

export function SelectPetItem({ title }: Props) {
  return (
    <>
      <Container>
        <Title>{title}</Title>

        <Feather name="chevron-right" color={theme.colors.heading} size={24} />
      </Container>

      <Divider />
    </>
  );
}
