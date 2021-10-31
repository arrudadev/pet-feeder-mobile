import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 34px;

  text-align: center;
  color: ${({ theme }) => theme.colors.heading};

  margin-top: 38px;
`;

const imageWidth = `${Dimensions.get('window').width * 0.7}px`;

export const Image = styled.Image`
  height: ${imageWidth};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  text-align: center;

  padding: 0 20px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const GoogleButton = styled.TouchableOpacity`
  flex-direction: row;

  margin-bottom: 10px;

  border-color: ${({ theme }) => theme.colors.shape};
  border-width: 1px;
  border-radius: 5px;

  height: 56px;
  width: 80%;
`;

export const GoogleButtonIconWrapper = styled.View`
  width: 20%;

  justify-content: center;
  align-items: center;

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.shape};
`;

export const GoogleButtonIcon = styled.Image`
  height: 24px;
  width: 24px;
`;

export const GoogleButtonTextWrapper = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const GoogleButtonText = styled.Text`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heading};
`;
