import styled from 'styled-components/native';

export const Container = styled.View<{ checked: boolean }>`
  align-items: center;
  justify-content: center;

  height: 120px;
  width: 160px;

  border-radius: 8px;
  margin-right: 8px;

  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.green : theme.colors.shape};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: space-between;

  height: 116px;
  width: 100px;

  padding: 20px 0;
`;

export const Title = styled.Text<{ checked: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 15px;

  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : theme.colors.heading};

  margin-top: 15px;
`;
