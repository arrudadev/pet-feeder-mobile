import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.View``;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.heading};
  margin-right: 6px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.heading};
`;
