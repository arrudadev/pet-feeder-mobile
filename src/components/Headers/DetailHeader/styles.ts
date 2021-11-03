import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

const statusBarHeight = `${getStatusBarHeight()}px`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 104px;
  width: 100%;

  padding: ${statusBarHeight} 24px 0;

  background-color: ${({ theme }) => theme.colors.shape};

  position: relative;
`;

export const WrapperBackIcon = styled.View`
  position: absolute;
  left: 24px;
  bottom: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.heading};
`;
