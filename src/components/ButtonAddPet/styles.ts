import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 48px;
  width: 48px;

  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 8px;
`;
