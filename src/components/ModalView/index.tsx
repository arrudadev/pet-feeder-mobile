import React, { ReactNode } from 'react';
import { Modal, ModalProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import theme from '../../styles/theme';
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
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ title, children, closeModal, ...rest }: Props) {
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

            {children}
          </Content>
        </Container>
      </Overlay>
    </Modal>
  );
}
