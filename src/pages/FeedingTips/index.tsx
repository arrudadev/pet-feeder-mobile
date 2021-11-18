import React from 'react';

import FeedingPetImg from '../../assets/feeding-pet.jpg';
import { DetailBanner } from '../../components/DetailBanner';
import { FeedWeightTable } from '../../components/FeedWeightTable';
import { DetailHeader } from '../../components/Headers/DetailHeader';
import {
  Container,
  Content,
  TipContent,
  TipDescription,
  TipTitles,
  WrapperTips,
} from './styles';

export function FeedingTips() {
  return (
    <Container>
      <DetailHeader title="Dicas" />

      <Content>
        <DetailBanner
          image={FeedingPetImg}
          title="Alimentação"
          subtitle="5 cuidados básicos com a alimentação do seu pet"
        />

        <WrapperTips>
          <FeedWeightTable />

          <TipContent>
            <TipTitles>
              1. Ofereça o alimento correto para cada espécie de pet
            </TipTitles>

            <TipDescription>
              Cada animal tem hábitos alimentares distintos, ou seja, mesmo que
              cães e gatos sejam mamíferos, ambos têm demandas nutricionais
              específicas. Os canídeos são considerados onívoros, isto é, parte
              da sua dieta é carne e parte é constituída de vegetais. Já os
              felinos são essencialmente carnívoros. Isso significa que as
              rações modernas são fabricadas levando em consideração as
              necessidades nutricionais de cada espécie — os alimentos para
              gatos, por exemplo, contêm maior aporte de proteína que a dos
              cães. Por isso, sempre ofereça o alimento certo para cada um
              deles, caso contrário, eles terão carência de nutrientes e não se
              desenvolverão com saúde.
            </TipDescription>
          </TipContent>

          <TipContent>
            <TipTitles>2. Não compartilhe a sua refeição com o pet</TipTitles>

            <TipDescription>
              Tire da mente a ideia de que aquilo que é bom para você é bom para
              o pet. O raciocínio aqui é o mesmo do tópico anterior. Porém,
              antes que você pense “ué, mas seres humanos também são onívoros”,
              lembre-se de que há uma lista de alimentos que fazem mal,
              intoxicam, causam doenças e desencadeiam alergias nos pets. Isso
              se deve ao fato de eles não sintetizarem as mesmas enzimas
              digestivas que nós e, por isso, não conseguem metabolizar muitas
              das substâncias contidas nas nossas refeições. Caso você queira
              oferecer uma alimentação in natura para o seu cão, converse com o
              Veterinário especialista em alimentação para cães e gatos para
              que, possa estabelecer uma dieta balanceada, o que na prática é
              muito difícil.
            </TipDescription>
          </TipContent>

          <TipContent>
            <TipTitles>3. Preze por oferecer uma ração de qualidade</TipTitles>

            <TipDescription>
              Se você quer ter um cuidado verdadeiro com a alimentação do seu
              pet, procure sempre por rações de qualidade garantida, ofereça
              alimentos Premium e Super Premium. Eles além de atenderem às
              exigências nutricionais dos animais, contêm nutrientes e aditivos
              nutracêuticos que melhoram a qualidade e a expectativa de vida dos
              animais. Além disso, sempre ofereça o alimento adequado, ao porte,
              a idade e a condição de saúde do seu pet. Novamente, isso se faz
              necessário porque cada fase de vida tem uma demanda diferente e,
              caso não sejam devidamente atendidas, a qualidade de vida será
              comprometida. Por exemplo, os cães e gatos filhotes necessitam de
              nutrientes para fortalecerem ossos e músculos, enquanto os cães
              idosos precisam de menos energia e mais reforço nas articulações e
              os gatos idosos precisam de alimentos mais atrativos e saborosos
              pois diminuem o olfato com a idade. O mesmo raciocínio vale para
              as condições de saúde: pets com problemas no trato urinário ou
              obesos, por exemplo, devem receber alimentos direcionados.
            </TipDescription>
          </TipContent>

          <TipContent>
            <TipTitles>4. Dê a quantidade correta de alimento</TipTitles>

            <TipDescription>
              Além de oferecer o alimento específico e de qualidade elevada para
              o seu peludo, é fundamental dar a quantidade certa a cada
              refeição. Isso é muito importante para que todas as necessidades
              nutricionais dele sejam supridas, mas, também, para que você não
              exagere na dose. O sobrepeso e a obesidade são problemas cada vez
              mais comuns entre os pets, já que muitos tutores não conseguem
              resistir aos olhares suplicantes de seus parceiros ao lado dos
              comedouros. Contudo, a responsabilidade de controlar essas ânsias
              é toda sua! Aqui, novamente a qualidade da ração influencia na boa
              dieta. As linhas Premium e Super Premium são especialmente
              desenvolvidas para satisfazerem o pet de maneira plena.
            </TipDescription>
          </TipContent>

          <TipContent>
            <TipTitles>5. Faça a higiene dos comedouros</TipTitles>

            <TipDescription>
              Sempre depois que o seu pet comer, é importante fazer a limpeza do
              potinho para evitar a proliferação de fungos, bactérias e outros
              patógenos no recipiente. Se você tutela um cão, conseguirá limpar
              o comedouro assim que ele concluir a refeição, já que não sobra um
              pellet de ração para contar história. Se você dividir sua casa com
              um bichano, será um pouco mais difícil, visto que eles preferem
              fazer pequenas refeições ao longo do dia. Contudo, procure fazer a
              higiene dos potinhos em intervalos curtos. Muito bem, esses foram
              os cuidados básicos que você deve ter com a alimentação do seu
              pet. Seguindo essas dicas, você garantirá mais saúde e bem-estar
              para o seu peludo.
            </TipDescription>
          </TipContent>
        </WrapperTips>
      </Content>
    </Container>
  );
}
