import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  padding: 10px 25px;
  margin: 10px 20px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Name = styled.Text`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 17px;

  margin-left: 10px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const ArrowIconWrapper = styled.View`
  align-items: flex-end;
`;

export const ButtonRemoveWrapper = styled.View``;

export const ButtonRemove = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 70px;

  background-color: ${({ theme }) => theme.colors.red};

  padding-left: 10px;
  margin-top: 12px;

  border-radius: 8px;

  position: relative;
  right: 30px;
`;
