import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.blue_light};

  padding: 20px;

  border-radius: 20px;
`;

export const Message = styled.Text`
  width: 70%;

  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 17px;
  text-align: justify;

  color: ${({ theme }) => theme.colors.blue};

  margin-left: 20px;
`;
