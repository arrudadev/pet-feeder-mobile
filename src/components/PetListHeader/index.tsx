import React from 'react';

import { Container, SubTitle, Title } from './styles';

type Props = {
  title: string;
  subtitle: string;
};

export function PetListHeader({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
