import React from 'react';

import { HomeHeader } from '../../components/Headers/HomeHeader';
import { Input } from '../../components/Input';
import { NoPetSelected } from '../../components/NoPetSelected';
import { NoRegisteredPets } from '../../components/NoRegisteredPets';
import { SelectPet } from '../../components/SelectPet';
import { TimeList } from '../../components/TimeList';
import { Tips } from '../../components/Tips';
import {
  ButtonEditPet,
  ButtonEditPetText,
  Container,
  TipsWrapper,
  Wrapper,
} from './styles';

export function Home() {
  const times: any[] = [
    { id: '1', time: '2021-11-15T13:00:00.769Z' },
    { id: '2', time: '2021-11-15T17:00:00.769Z' },
    { id: '3', time: '2021-11-15T23:00:00.769Z' },
  ];

  const petSelected = false;

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
        {times.length === 0 && <NoRegisteredPets />}

        {times.length > 0 && (
          <>
            <SelectPet />

            {!petSelected && <NoPetSelected />}

            {petSelected && (
              <>
                <Input
                  label="Quantidade de ração por Refeição"
                  value="100g"
                  editable={false}
                />

                <TimeList times={times} />

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
