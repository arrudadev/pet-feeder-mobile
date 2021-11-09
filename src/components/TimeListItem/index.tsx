import React from 'react';
import { Alert } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

import { Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';
import {
  ButtonRemove,
  ButtonRemoveWrapper,
  Container,
  EditIconWrapper,
  Time,
} from './styles';

type TimeListItemProps = {
  time: string;
};
export function TimeListItem({ time }: TimeListItemProps) {
  function handleRemove() {
    Alert.alert(
      'Remover',
      `Deseja remover ${time} da sua lista de Horários de Alimentação?`,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
        },
      ],
    );
  }

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonRemoveWrapper>
            <ButtonRemove onPress={() => handleRemove()}>
              <Feather name="trash" size={22} color={theme.colors.white} />
            </ButtonRemove>
          </ButtonRemoveWrapper>
        </Animated.View>
      )}
    >
      <Container>
        <Time>{time}</Time>

        <EditIconWrapper>
          <Feather name="edit" size={22} color={theme.colors.heading} />
        </EditIconWrapper>
      </Container>
    </Swipeable>
  );
}
