import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.blue_light};

  padding: 20px;

  border-radius: 20px;
`;

export const Message = styled.Text<{ customWidth: string }>`
  width: ${({ customWidth }) => customWidth};

  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 17px;
  text-align: justify;

  color: ${({ theme }) => theme.colors.blue};

  margin-left: 20px;
`;
