import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  padding: 0 24px;
  margin-top: 27px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.body_dark};
`;
