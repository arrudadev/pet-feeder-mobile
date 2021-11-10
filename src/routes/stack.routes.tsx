import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddPet } from '../pages/AddPet';
import { BreedDetail } from '../pages/BreedDetail';
import { FeedingTips } from '../pages/FeedingTips';
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

    <Stack.Screen name="FeedingTips" component={FeedingTips} />

    <Stack.Screen name="BreedDetail" component={BreedDetail} />

    <Stack.Screen name="AddPet" component={AddPet} />
  </Stack.Navigator>
);
