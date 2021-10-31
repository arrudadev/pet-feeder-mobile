import React from 'react';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { Container, Message } from './styles';

type TipsProps = {
  showArrowIcon?: boolean;
  message: string;
};

export function Tips({ showArrowIcon = false, message }: TipsProps) {
  const customWidth = showArrowIcon ? '70%' : '100%';

  return (
    <Container>
      <MaterialCommunityIcons name="dog" size={28} color={theme.colors.blue} />

      <Message customWidth={customWidth}>{message}</Message>

      {showArrowIcon && (
        <Feather name="chevron-right" size={22} color={theme.colors.blue} />
      )}
    </Container>
  );
}
