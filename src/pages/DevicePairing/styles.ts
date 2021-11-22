import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  justify-content: center;

  margin: 10px 0;

  padding: 0 20px;
`;

export const WifiWrapper = styled.View`
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.heading};

  text-align: center;
  margin: 10px 0;
`;

export const ButtonSave = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 56px;

  margin-top: 10px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const ButtonSaveText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
`;
