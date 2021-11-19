import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { usePet } from '../../hooks/usePet';
import theme from '../../styles/theme';
import { Container, Divider, Title } from './styles';

type Props = {
  petId: string;
  petName: string;
  closeModal: () => void;
};

export function SelectPetItem({ petId, petName, closeModal }: Props) {
  const { changePet } = usePet();

  function handleSelectPet() {
    changePet(petId);
    closeModal();
  }

  return (
    <TouchableOpacity onPress={handleSelectPet}>
      <Container>
        <Title>{petName}</Title>

        <Feather name="chevron-right" color={theme.colors.heading} size={24} />
      </Container>

      <Divider />
    </TouchableOpacity>
  );
}
