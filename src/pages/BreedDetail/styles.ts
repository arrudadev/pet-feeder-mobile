import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.ScrollView`
  margin: 10px 0;

  padding: 0 20px;
`;

export const Content = styled.View`
  margin-top: 15px;
`;

export const ContentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const ContentDescription = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.heading};
`;
