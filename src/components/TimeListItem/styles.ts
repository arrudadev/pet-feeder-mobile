import { RectButton } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';

const styledContainer = css`
  flex-direction: row;
  align-items: center;

  padding: 10px 15px;
  margin: 10px 0;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Container = styled.View`
  ${styledContainer}
`;

export const ContainerButton = styled(RectButton)`
  ${styledContainer}
`;

export const Time = styled.Text`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 17px;

  margin-left: 10px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const EditIconWrapper = styled.View`
  align-items: flex-end;
`;

export const ButtonRemoveWrapper = styled.View``;

export const ButtonRemove = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 50px;

  background-color: ${({ theme }) => theme.colors.red};

  margin-top: 12px;
  margin-left: -10px;

  padding-left: 8px;

  border-radius: 8px;

  position: relative;
`;
