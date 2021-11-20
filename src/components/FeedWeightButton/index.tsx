import React, { useState } from 'react';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { FeedWeightModal } from '../FeedWeightModal';
import { Container, Message } from './styles';

export function FeedWeightButton() {
  const [isFeedWeightModalOpen, setIsFeedWeightModalOpen] = useState(false);

  function handleOpenFeedWeightModal() {
    setIsFeedWeightModalOpen(true);
  }

  function handleCloseFeedWeightModal() {
    setIsFeedWeightModalOpen(false);
  }
  return (
    <>
      <Container onPress={handleOpenFeedWeightModal}>
        <MaterialCommunityIcons
          name="dog"
          size={28}
          color={theme.colors.blue}
        />

        <Message>
          Dica para saber a quantidade ideal de ração para o seu Pet
        </Message>

        <Feather name="chevron-right" size={22} color={theme.colors.blue} />
      </Container>

      <FeedWeightModal
        visible={isFeedWeightModalOpen}
        closeModal={handleCloseFeedWeightModal}
      />
    </>
  );
}
