import styled from 'styled-components/native';

export const Container = styled.View``;

export const StyledTextInput = styled.TextInput`
  height: 48px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.heading};

  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.heading};

  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 13px;

  margin-right: 4px;
  padding: 0 20px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};

  margin: 10px 0;
`;
