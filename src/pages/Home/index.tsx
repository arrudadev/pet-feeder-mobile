import React from 'react';

import { HomeHeader } from '../../components/Headers/HomeHeader';
import { Input } from '../../components/Input';
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
  const times = [
    { id: '1', time: '2021-11-15T13:00:00.769Z' },
    { id: '2', time: '2021-11-15T17:00:00.769Z' },
    { id: '3', time: '2021-11-15T23:00:00.769Z' },
  ];

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
        <SelectPet />

        <Input
          label="Quantidade de ração por Refeição"
          value="100g"
          editable={false}
        />

        <TimeList times={times} />

        <ButtonEditPet>
          <ButtonEditPetText>Editar Pet</ButtonEditPetText>
        </ButtonEditPet>
      </Wrapper>
    </Container>
  );
}
