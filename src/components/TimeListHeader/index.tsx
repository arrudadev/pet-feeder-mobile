import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { AddButton, Container, Title } from './styles';

type TimeListHeaderProps = {
  editable?: boolean;
  onAdd?: (id: string) => void;
};

export function TimeListHeader({
  editable = false,
  onAdd,
}: TimeListHeaderProps) {
  return (
    <Container>
      <Title>Horários</Title>

      {editable && (
        // eslint-disable-next-line
        // @ts-ignore
        <AddButton onPress={onAdd}>
          <MaterialCommunityIcons
            name="plus"
            color={theme.colors.white}
            size={18}
          />
        </AddButton>
      )}
    </Container>
  );
}
