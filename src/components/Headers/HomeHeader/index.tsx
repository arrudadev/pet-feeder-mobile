import React from 'react';

import { ButtonAddPet } from '../../ButtonAddPet';
import { Profile } from '../../Profile';
import { Container } from './styles';

export function HomeHeader() {
  return (
    <Container>
      <Profile />

      <ButtonAddPet />
    </Container>
  );
}
