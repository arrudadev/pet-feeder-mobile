import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },

  title: {
    fontFamily: theme.fonts.heading,
    fontSize: 16,
    color: theme.colors.heading,
    marginBottom: 10,
  },

  head: {
    height: 80,
    backgroundColor: theme.colors.shape,
  },

  text: {
    margin: 10,
  },
});
