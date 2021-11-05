import React from 'react';

import { useRoute } from '@react-navigation/native';

import { DetailBanner } from '../../components/DetailBanner';
import { DetailHeader } from '../../components/Headers/DetailHeader';
import {
  Container,
  Content,
  ContentDescription,
  ContentTitle,
  Wrapper,
} from './styles';

type RouteParams = {
  breedId: number;
  breed: string;
};

export function BreedDetail() {
  const routes = useRoute();

  const { breedId, breed } = routes.params as RouteParams;

  return (
    <Container>
      <DetailHeader title="Detalhes da Raça" />

      <DetailBanner
        image={{
          uri: 'data:image/jpeg;base64,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',
        }}
        title={breed}
      />

      <Wrapper>
        <Content>
          <ContentTitle>Sobre</ContentTitle>

          <ContentDescription>
            O buldogue-inglês é uma raça de cães do tipo buldogue oriunda da
            Inglaterra. Descende de cães utilizados para combater touros em um
            desporto sangrento chamado bull-baiting.
          </ContentDescription>
        </Content>

        <Content>
          <ContentTitle>Expectativa de vida</ContentTitle>

          <ContentDescription>8 a 10 anos.</ContentDescription>
        </Content>

        <Content>
          <ContentTitle>Altura</ContentTitle>

          <ContentDescription>
            Fêmea: 31–40 cm, Macho: 31–40 cm.
          </ContentDescription>
        </Content>

        <Content>
          <ContentTitle>Peso</ContentTitle>

          <ContentDescription>
            Fêmea: 18–23 kg, Macho: 23–25 kg.
          </ContentDescription>
        </Content>

        <Content>
          <ContentTitle>Personalidade</ContentTitle>

          <ContentDescription>
            Voluntarioso, Amigável, Dócil, Gregário.
          </ContentDescription>
        </Content>
      </Wrapper>
    </Container>
  );
}
