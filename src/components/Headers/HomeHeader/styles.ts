import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 184px;
  width: 100%;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.shape};
`;
