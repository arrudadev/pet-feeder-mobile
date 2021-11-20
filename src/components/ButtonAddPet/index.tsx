import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CommonActions, useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';
import { Container } from './styles';

export function ButtonAddPet({ ...rest }: RectButtonProps) {
  const navigation = useNavigation();

  function handleGoToAddPetPage() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddPet',
        params: {
          mode: 'new',
        },
      }),
    );
  }

  return (
    <Container {...rest} onPress={() => handleGoToAddPetPage()}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.white}
        size={28}
      />
    </Container>
  );
}
