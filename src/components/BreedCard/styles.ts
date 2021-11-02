import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-items: center;

  height: 140px;
  width: 160px;

  margin-right: 8px;

  position: relative;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Image = styled.Image`
  height: 100px;
  width: 100%;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};

  margin-top: 8px;
`;
