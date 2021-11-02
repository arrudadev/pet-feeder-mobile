import React from 'react';

import { BreedHorizontalList } from '../../components/BreedHorizontalList';
import { HomeHeader } from '../../components/Headers/HomeHeader';
import { PetList } from '../../components/PetList';
import { PetTypeCard } from '../../components/PetTypeCard';
import { Tips } from '../../components/Tips';
import {
  Container,
  PetListWrapper,
  PetTypeTitle,
  PetTypeWrapper,
  PetTypeWrapperCards,
  TipsWrapper,
} from './styles';

export function Home() {
  return (
    <Container>
      <HomeHeader />

      <TipsWrapper>
        <Tips showArrowIcon message="Dicas para cuidar melhor do seu Pet" />
      </TipsWrapper>

      <PetTypeWrapper>
        <PetTypeTitle>Categorias</PetTypeTitle>

        <PetTypeWrapperCards>
          <PetTypeCard type="dog" checked />

          <PetTypeCard type="cat" checked={false} />
        </PetTypeWrapperCards>
      </PetTypeWrapper>

      <BreedHorizontalList />

      <PetListWrapper>
        <PetList />
      </PetListWrapper>
    </Container>
  );
}
