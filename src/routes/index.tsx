import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import StyledTheme from '../styles/theme';
import { StackRoutes } from './stack.routes';

export const Routes = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: StyledTheme.colors.background,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
};
