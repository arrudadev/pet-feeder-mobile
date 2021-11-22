import React, { useEffect } from 'react';

import { CommonActions, useNavigation } from '@react-navigation/native';

import { HomeHeader } from '../../components/Headers/HomeHeader';
import { Input } from '../../components/Input';
import { NoPetSelected } from '../../components/NoPetSelected';
import { NoRegisteredPets } from '../../components/NoRegisteredPets';
import { SelectPet } from '../../components/SelectPet';
import { TimeList } from '../../components/TimeList';
import { Tips } from '../../components/Tips';
import { usePet } from '../../hooks/usePet';
import {
  ButtonDevicePairing,
  ButtonDevicePairingText,
  ButtonEditPet,
  ButtonEditPetText,
  Container,
  TipsWrapper,
  Wrapper,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const {
    loadPetList,
    petList,
    selectedPetId,
    selectedPetName,
    selectedPetFeedWeight,
    selectedPetFeedHours,
  } = usePet();

  const petSelected = !!selectedPetId;

  function handleEditPet() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AddPet',
        params: {
          selectedPetId,
          selectedPetName,
          selectedPetFeedWeight,
          selectedPetFeedHours,
          mode: 'edit',
        },
      }),
    );
  }

  function handleDevicePairing() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'DevicePairing',
      }),
    );
  }

  useEffect(() => {
    const fetchPets = async () => {
      await loadPetList();
    };

    fetchPets();
  }, []);

  return (
    <Container>
      <HomeHeader />

      <TipsWrapper>
        <Tips
          showArrowIcon
          message="Dicas para cuidar melhor do seu Pet"
          navigationPage="FeedingTips"
        />
      </TipsWrapper>

      <Wrapper>
        {petList.length === 0 && <NoRegisteredPets />}

        {petList.length > 0 && (
          <>
            <SelectPet />

            {!petSelected && <NoPetSelected />}

            {petSelected && (
              <>
                <Input
                  label="Quantidade de ração por Refeição"
                  value={String(selectedPetFeedWeight)}
                  editable={false}
                />

                <TimeList times={selectedPetFeedHours} />

                <ButtonEditPet onPress={() => handleEditPet()}>
                  <ButtonEditPetText>Editar Pet</ButtonEditPetText>
                </ButtonEditPet>

                <ButtonDevicePairing onPress={() => handleDevicePairing()}>
                  <ButtonDevicePairingText>
                    Parear Dispositivo
                  </ButtonDevicePairingText>
                </ButtonDevicePairing>
              </>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
