import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;

  color: ${({ theme }) => theme.colors.heading};

  margin: 20px 0;
`;

export const Divider = styled.View`
  height: 1px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.heading};
`;
