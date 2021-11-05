import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CommonActions, useNavigation } from '@react-navigation/native';

import { Container, Image, Name } from './styles';

interface BreedCardProps extends RectButtonProps {
  imageUrl: string;
  name: string;
}

export const BreedCard = ({ imageUrl, name, ...rest }: BreedCardProps) => {
  const navigation = useNavigation();

  function handleGoToBreedDetailPage() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'BreedDetail',
        params: {
          breedId: 1,
          breed: name,
        },
      }),
    );
  }

  return (
    <Container {...rest} onPress={() => handleGoToBreedDetailPage()}>
      <Image source={{ uri: imageUrl }} resizeMode="stretch" />

      <Name>{name}</Name>
    </Container>
  );
};
