import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Image, Name } from './styles';

interface BreedCardProps extends RectButtonProps {
  imageUrl: string;
  name: string;
}

export const BreedCard = ({ imageUrl, name, ...rest }: BreedCardProps) => {
  return (
    <Container {...rest}>
      <Image source={{ uri: imageUrl }} resizeMode="stretch" />

      <Name>{name}</Name>
    </Container>
  );
};
