import React from 'react';
import { Modal, ModalProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { FeedWeightTable } from '../FeedWeightTable';
import {
  Container,
  Content,
  CloseButton,
  Overlay,
  Header,
  Title,
} from './styles';

type Props = ModalProps & {
  closeModal: () => void;
};

export function FeedWeightModal({ closeModal, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <Overlay>
        <Container>
          <Content>
            <Header>
              <Title>Dica para alimentar o seu Pet</Title>

              <CloseButton onPress={closeModal}>
                <Ionicons
                  name="md-close-outline"
                  color={theme.colors.heading}
                  size={38}
                />
              </CloseButton>
            </Header>

            <FeedWeightTable />
          </Content>
        </Container>
      </Overlay>
    </Modal>
  );
}
