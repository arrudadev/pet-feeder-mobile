import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { Container, Text } from './styles';

export function NoPetSelected() {
  return (
    <Container>
      <MaterialCommunityIcons name="dog" size={72} color={theme.colors.green} />

      <Text>Nenhum Pet selecionado</Text>
    </Container>
  );
}
