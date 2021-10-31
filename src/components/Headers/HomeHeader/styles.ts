import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

const statusBarHeight = `${getStatusBarHeight()}px`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 130px;
  width: 100%;

  padding: 0 24px;
  padding-top: ${statusBarHeight};

  background-color: ${({ theme }) => theme.colors.shape};
`;
