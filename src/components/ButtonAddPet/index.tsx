import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { Container } from './styles';

export function ButtonAddPet({ ...rest }: RectButtonProps) {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.white}
        size={28}
      />
    </Container>
  );
}
