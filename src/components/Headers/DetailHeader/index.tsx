import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import theme from '../../../styles/theme';
import { Container, Title, WrapperBackIcon } from './styles';

type DetailHeaderProps = {
  title: string;
};

export function DetailHeader({ title }: DetailHeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <WrapperBackIcon>
        <BorderlessButton onPress={() => handleGoBack()}>
          <Feather name="arrow-left" size={24} color={theme.colors.heading} />
        </BorderlessButton>
      </WrapperBackIcon>

      <Title>{title}</Title>
    </Container>
  );
}
