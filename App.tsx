import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar />
      </View>
    </ThemeProvider>
  );
}
