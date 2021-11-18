import React from 'react';
import { Alert } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

import { Feather } from '@expo/vector-icons';

import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import theme from '../../styles/theme';
import {
  ButtonRemove,
  ButtonRemoveWrapper,
  Container,
  ContainerButton,
  EditIconWrapper,
  Time,
} from './styles';

type TimeListItemProps = {
  id: string;
  time: string;
  editable?: boolean;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
};
export function TimeListItem({
  id,
  time,
  editable = false,
  onDelete,
  onEdit,
}: TimeListItemProps) {
  function handleRemove() {
    const formatedTime = format(parseISO(time), 'HH:mm', {
      locale: ptBR,
    });

    Alert.alert(
      'Remover',
      `Deseja remover ${formatedTime} da sua lista de Horários de Alimentação?`,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            if (onDelete) onDelete(id);
          },
        },
      ],
    );
  }

  function handleEdit() {
    if (onEdit) onEdit(id);
  }

  if (!editable) {
    return (
      <Container>
        <Time>
          {format(parseISO(time), 'HH:mm', {
            locale: ptBR,
          })}
        </Time>

        <EditIconWrapper>
          <Feather name="clock" size={22} color={theme.colors.heading} />
        </EditIconWrapper>
      </Container>
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
      <ContainerButton onPress={handleEdit}>
        <Time>
          {format(parseISO(time), 'HH:mm', {
            locale: ptBR,
          })}
        </Time>

        <EditIconWrapper>
          <Feather name="edit" size={22} color={theme.colors.heading} />
        </EditIconWrapper>
      </ContainerButton>
    </Swipeable>
  );
}
