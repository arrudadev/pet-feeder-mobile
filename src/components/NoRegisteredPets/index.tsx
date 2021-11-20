import React from 'react';

import { CommonActions, useNavigation } from '@react-navigation/native';

import noDataEmoji from '../../assets/no-data-emoji.png';
import {
  Container,
  Image,
  Text,
  RegisterPetButtonWrapper,
  RegisterPetButton,
  RegisterPetButtonText,
} from './styles';

export function NoRegisteredPets() {
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
    <Container>
      <Image source={noDataEmoji} />

      <Text>Você não tem nenhum Pet cadastrado</Text>

      <RegisterPetButtonWrapper>
        <RegisterPetButton onPress={handleGoToAddPetPage}>
          <RegisterPetButtonText>Cadastrar Pet</RegisterPetButtonText>
        </RegisterPetButton>
      </RegisterPetButtonWrapper>
    </Container>
  );
}
