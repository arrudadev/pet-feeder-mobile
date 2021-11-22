import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { PetContextProvider } from '../contexts/PetContext';
import { UserContextProvider } from '../contexts/UserContext';
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
      <UserContextProvider>
        <PetContextProvider>
          <StackRoutes />
        </PetContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  );
};
