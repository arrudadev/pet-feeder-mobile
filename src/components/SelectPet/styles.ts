import styled from 'styled-components/native';

export const Select = styled.View`
  flex-direction: row;
  align-items: center;

  height: 48px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.shape};
  border-color: ${({ theme }) => theme.colors.heading};
  border-width: 1px;
  border-radius: 8px;

  padding: 0 25px;
  overflow: hidden;
`;

export const SelectBody = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};
`;
