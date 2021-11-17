import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  padding: 0 20px;
`;

export const Overlay = styled.View`
  flex: 1;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const Bar = styled.View`
  height: 2px;
  width: 39px;

  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.heading};

  align-self: center;

  margin-top: 13px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;

  color: ${({ theme }) => theme.colors.heading};

  margin: 20px 0;
`;

export const CloseButton = styled.TouchableOpacity``;
