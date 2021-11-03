import React from 'react';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { CommonActions, useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';
import { Button, Container, Message } from './styles';

type TipsProps = {
  message: string;
  showArrowIcon?: boolean;
  navigationPage?: string;
};

type TipsViewProps = {
  customWidth: string;
} & Omit<TipsProps, 'navigationPage'>;

type TipsButtonProps = {
  customWidth: string;
} & TipsProps;

function TipView({ showArrowIcon, message, customWidth }: TipsViewProps) {
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

function TipButton({
  showArrowIcon,
  message,
  customWidth,
  navigationPage,
}: TipsButtonProps) {
  const navigation = useNavigation();

  function handleGoToTipsPage() {
    navigation.dispatch(CommonActions.navigate({ name: navigationPage || '' }));
  }

  return (
    <Button onPress={() => handleGoToTipsPage()}>
      <MaterialCommunityIcons name="dog" size={28} color={theme.colors.blue} />

      <Message customWidth={customWidth}>{message}</Message>

      {showArrowIcon && (
        <Feather name="chevron-right" size={22} color={theme.colors.blue} />
      )}
    </Button>
  );
}

export function Tips({
  showArrowIcon = false,
  message,
  navigationPage,
}: TipsProps) {
  const customWidth = showArrowIcon ? '70%' : '100%';

  if (showArrowIcon) {
    return (
      <TipButton
        showArrowIcon={showArrowIcon}
        message={message}
        customWidth={customWidth}
        navigationPage={navigationPage}
      />
    );
  }

  return (
    <TipView
      showArrowIcon={showArrowIcon}
      message={message}
      customWidth={customWidth}
    />
  );
}
