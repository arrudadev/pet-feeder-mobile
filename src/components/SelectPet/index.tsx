import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { ModalView } from '../ModalView';
import { SelectPetItem } from '../SelectPetItem';
import { Label, Select, SelectBody } from './styles';

export function SelectPet() {
  const [isSelectPetModalOpen, setIsSelectPetModalOpen] = useState(false);

  function handleOpenSelectPetModal() {
    setIsSelectPetModalOpen(true);
  }

  function handleCloseSelectPetModal() {
    setIsSelectPetModalOpen(false);
  }

  const pets = [
    { id: '1', title: 'Pipoca' },
    { id: '2', title: 'Marafo' },
    { id: '3', title: 'Marafo' },
  ];

  return (
    <>
      <RectButton onPress={() => handleOpenSelectPetModal()}>
        <Select>
          <SelectBody>
            <Label>Selecione o seu Pet</Label>
          </SelectBody>

          <Feather
            name="chevron-right"
            color={theme.colors.heading}
            size={18}
          />
        </Select>
      </RectButton>

      <ModalView
        title="Meus Pets"
        visible={isSelectPetModalOpen}
        closeModal={() => handleCloseSelectPetModal()}
      >
        {pets.map(pet => (
          <SelectPetItem key={pet.id} title={pet.title} />
        ))}
      </ModalView>
    </>
  );
}
