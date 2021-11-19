import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { usePet } from '../../hooks/usePet';
import theme from '../../styles/theme';
import { ModalView } from '../ModalView';
import { Label, Select, SelectBody } from './styles';

export function SelectPet() {
  const { selectedPetName } = usePet();

  const [isSelectPetModalOpen, setIsSelectPetModalOpen] = useState(false);

  function handleOpenSelectPetModal() {
    setIsSelectPetModalOpen(true);
  }

  function handleCloseSelectPetModal() {
    setIsSelectPetModalOpen(false);
  }

  return (
    <>
      <RectButton onPress={() => handleOpenSelectPetModal()}>
        <Select>
          <SelectBody>
            <Label>
              {selectedPetName.length > 0
                ? selectedPetName
                : 'Selecione um Pet'}
            </Label>
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
      />
    </>
  );
}
