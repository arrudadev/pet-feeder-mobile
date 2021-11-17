import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TipsWrapper = styled.View`
  position: relative;
  top: -40px;

  padding: 0 20px;
`;

export const Wrapper = styled.View`
  padding: 0 20px;
`;

export const PetTypeWrapper = styled.View`
  position: relative;
  top: -20px;

  padding: 0 20px;
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

export const PetListWrapper = styled.View`
  flex: 1;

  position: relative;
  top: -10px;
`;

export const BreedWrapper = styled.View`
  position: relative;
  top: -5px;

  padding: 0 20px;
`;

export const BreedWrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BreedTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.heading};

  margin-bottom: 10px;
`;

export const BreedSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.body_dark};
`;

export const ButtonEditPet = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 56px;

  margin-top: 10px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const ButtonEditPetText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.white};
`;
