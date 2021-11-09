import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const AddButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 28px;

  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 30px;
`;
