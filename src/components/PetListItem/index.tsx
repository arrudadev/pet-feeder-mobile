import React from 'react';
import { Alert } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';
import {
  ArrowIconWrapper,
  ButtonRemove,
  ButtonRemoveWrapper,
  Container,
  Name,
} from './styles';

type PetListItemProps = {
  pet: {
    id: number;
    type: 'dog' | 'cat';
    name: string;
  };
};
export function PetListItem({ pet }: PetListItemProps) {
  const { type, name } = pet;

  function handleRemove() {
    Alert.alert('Remover', `Deseja remover ${name} da sua lista de Pets?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
      },
    ]);
  }

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonRemoveWrapper>
            <ButtonRemove onPress={() => handleRemove()}>
              <Feather name="trash" size={32} color={theme.colors.white} />
            </ButtonRemove>
          </ButtonRemoveWrapper>
        </Animated.View>
      )}
    >
      <Container>
        <MaterialCommunityIcons
          name={type}
          size={32}
          color={theme.colors.green}
        />

        <Name>{name}</Name>

        <ArrowIconWrapper>
          <Feather name="chevron-right" size={22} color={theme.colors.blue} />
        </ArrowIconWrapper>
      </Container>
    </Swipeable>
  );
}
