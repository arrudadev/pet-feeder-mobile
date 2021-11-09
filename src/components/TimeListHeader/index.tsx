import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { AddButton, Container, Title } from './styles';

export function TimeListHeader() {
  return (
    <Container>
      <Title>Horários</Title>

      <AddButton>
        <MaterialCommunityIcons
          name="plus"
          color={theme.colors.white}
          size={18}
        />
      </AddButton>
    </Container>
  );
}
