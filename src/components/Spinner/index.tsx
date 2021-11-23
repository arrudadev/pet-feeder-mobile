import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { Container, Title } from './styles';

type SpinnerProps = {
  visible: boolean;
};

export const Spinner = ({ visible }: SpinnerProps) => {
  return (
    <Modal transparent animationType="none" visible={visible}>
      <Container>
        <ActivityIndicator animating={visible} size="large" color="white" />

        <Title>Carregando...</Title>
      </Container>
    </Modal>
  );
};
