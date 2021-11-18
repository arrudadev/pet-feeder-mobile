import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const PetTypeWrapper = styled.View`
  margin-top: 20px;
`;

export const PetTypeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};

  margin-bottom: 10px;
`;

export const PetTypeWrapperCards = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FieldsWrapper = styled.View`
  margin-top: 10px;
`;

export const ButtonRegisterPet = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 56px;

  margin-top: 10px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const ButtonRegisterPetText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
`;

export const FeedWeightTableWrapper = styled.View`
  margin-top: 30px;
`;
