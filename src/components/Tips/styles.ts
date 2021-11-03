import { RectButton } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';

const content = css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.blue_light};

  padding: 20px;

  border-radius: 20px;
`;

export const Container = styled.View`
  ${content}
`;

export const Button = styled(RectButton)`
  ${content}
`;

export const Message = styled.Text<{ customWidth: string }>`
  width: ${({ customWidth }) => customWidth};

  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 17px;
  text-align: justify;

  color: ${({ theme }) => theme.colors.blue};

  margin-left: 20px;
`;
