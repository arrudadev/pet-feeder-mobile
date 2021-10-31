import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

const Stack = createNativeStackNavigator();

export const StackRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login" component={Login} />

    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
