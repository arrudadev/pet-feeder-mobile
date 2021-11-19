import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: 300px;
  width: 300px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 17px;

  text-align: center;

  padding: 10px 0;

  color: ${({ theme }) => theme.colors.heading};

  width: 200px;
`;

export const RegisterPetButtonWrapper = styled.View`
  margin-top: 10px;

  width: 80%;
`;

export const RegisterPetButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 56px;

  margin-top: 10px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const RegisterPetButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
`;
