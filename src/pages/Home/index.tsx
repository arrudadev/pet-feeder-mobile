import React from 'react';

import { HomeHeader } from '../../components/Headers/HomeHeader';
import { PetList } from '../../components/PetList';
import { PetTypeCard } from '../../components/PetTypeCard';
import { Tips } from '../../components/Tips';
import {
  Container,
  PetListWrapper,
  PetTypeWrapper,
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
        <PetTypeCard type="dog" checked />

        <PetTypeCard type="cat" checked={false} />
      </PetTypeWrapper>

      <PetListWrapper>
        <PetList />
      </PetListWrapper>
    </Container>
  );
}
