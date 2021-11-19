import React, { useEffect } from 'react';

import { HomeHeader } from '../../components/Headers/HomeHeader';
import { Input } from '../../components/Input';
import { NoPetSelected } from '../../components/NoPetSelected';
import { NoRegisteredPets } from '../../components/NoRegisteredPets';
import { SelectPet } from '../../components/SelectPet';
import { TimeList } from '../../components/TimeList';
import { Tips } from '../../components/Tips';
import { usePet } from '../../hooks/usePet';
import {
  ButtonEditPet,
  ButtonEditPetText,
  Container,
  TipsWrapper,
  Wrapper,
} from './styles';

export function Home() {
  const {
    loadPetList,
    petList,
    selectedPetId,
    selectedPetFeedWeight,
    selectedPetFeedHours,
  } = usePet();

  const petSelected = !!selectedPetId;

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

                <ButtonEditPet>
                  <ButtonEditPetText>Editar Pet</ButtonEditPetText>
                </ButtonEditPet>
              </>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  );
}
