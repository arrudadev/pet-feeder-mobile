import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { Container, Content, Title } from './styles';

type PetTypeCardProps = {
  type: 'dog' | 'cat';
  checked: boolean;
};

export function PetTypeCard({ type, checked }: PetTypeCardProps) {
  const title = type === 'dog' ? 'Cachorro' : 'Gato';
  const iconColor = checked ? theme.colors.white : theme.colors.heading;

  return (
    <Container checked={checked}>
      <Content>
        <MaterialCommunityIcons name={type} size={48} color={iconColor} />

        <Title checked={checked}>{title}</Title>
      </Content>
    </Container>
  );
}
