import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: 150px;
`;
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 22px;

  text-align: center;

  padding: 10px 0;

  color: ${({ theme }) => theme.colors.heading};
`;
