import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../pages/Login';

const Stack = createNativeStackNavigator();

export const StackRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);
