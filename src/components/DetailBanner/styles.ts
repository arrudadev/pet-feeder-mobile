import styled from 'styled-components/native';

export const Banner = styled.ImageBackground`
  height: 234px;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;

  padding: 0 24px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;

  color: ${({ theme }) => theme.colors.green_dark};
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 13px;
  line-height: 21px;

  color: ${({ theme }) => theme.colors.green_dark};
`;
