import React from 'react';

import { BreedHorizontalList } from '../../components/BreedHorizontalList';
import { HomeHeader } from '../../components/Headers/HomeHeader';
import { PetList } from '../../components/PetList';
import { PetTypeCard } from '../../components/PetTypeCard';
import { Tips } from '../../components/Tips';
import {
  BreedSubtitle,
  BreedTitle,
  BreedWrapper,
  BreedWrapperHeader,
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
        <Tips
          showArrowIcon
          message="Dicas para cuidar melhor do seu Pet"
          navigationPage="FeedingTips"
        />
      </TipsWrapper>

      <PetTypeWrapper>
        <PetTypeTitle>Categorias</PetTypeTitle>

        <PetTypeWrapperCards>
          <PetTypeCard type="dog" checked />

          <PetTypeCard type="cat" checked={false} />
        </PetTypeWrapperCards>
      </PetTypeWrapper>

      <BreedWrapper>
        <BreedWrapperHeader>
          <BreedTitle>Raças</BreedTitle>

          <BreedSubtitle>Ver todos</BreedSubtitle>
        </BreedWrapperHeader>

        <BreedHorizontalList />
      </BreedWrapper>

      <PetListWrapper>
        <PetList />
      </PetListWrapper>
    </Container>
  );
}
