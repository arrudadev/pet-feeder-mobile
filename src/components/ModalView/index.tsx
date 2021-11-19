import React from 'react';
import { Modal, ModalProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { usePet } from '../../hooks/usePet';
import theme from '../../styles/theme';
import { SelectPetItem } from '../SelectPetItem';
import {
  Bar,
  Container,
  Content,
  CloseButton,
  Overlay,
  Header,
  Title,
} from './styles';

type Props = ModalProps & {
  title: string;
  closeModal: () => void;
};

export function ModalView({ title, closeModal, ...rest }: Props) {
  const { petList } = usePet();

  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <Overlay>
        <Container>
          <Content>
            <Bar />

            <Header>
              <Title>{title}</Title>

              <CloseButton onPress={closeModal}>
                <Ionicons
                  name="md-close-outline"
                  color={theme.colors.heading}
                  size={38}
                />
              </CloseButton>
            </Header>

            {petList.map(pet => (
              <SelectPetItem
                key={pet.petId}
                petId={pet.petId}
                petName={pet.petName}
                closeModal={closeModal}
              />
            ))}
          </Content>
        </Container>
      </Overlay>
    </Modal>
  );
}
