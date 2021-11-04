import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const WrapperTips = styled.ScrollView`
  margin: 10px 0;

  padding: 0 20px;
`;

export const TipContent = styled.View`
  margin-top: 15px;
`;

export const TipTitles = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const TipDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.heading};
`;
