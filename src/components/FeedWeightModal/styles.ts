import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 80px;
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const Overlay = styled.View`
  flex: 1;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};
`;

export const CloseButton = styled.TouchableOpacity``;
