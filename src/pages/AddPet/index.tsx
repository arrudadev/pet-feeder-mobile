import React from 'react';

import { DetailHeader } from '../../components/Headers/DetailHeader';
import { Input } from '../../components/Input';
import { PetTypeCard } from '../../components/PetTypeCard';
import { TimeList } from '../../components/TimeList';
import { Tips } from '../../components/Tips';
import {
  ButtonRegisterPet,
  ButtonRegisterPetText,
  Container,
  Content,
  FieldsWrapper,
  PetTypeTitle,
  PetTypeWrapper,
  PetTypeWrapperCards,
} from './styles';

export function AddPet() {
  return (
    <Container>
      <DetailHeader title="Adicionar Pet" />

      <Content>
        <PetTypeWrapper>
          <PetTypeTitle>Categorias</PetTypeTitle>

          <PetTypeWrapperCards>
            <PetTypeCard type="dog" checked />

            <PetTypeCard type="cat" checked={false} />
          </PetTypeWrapperCards>
        </PetTypeWrapper>

        <FieldsWrapper>
          <Input label="Nome" />

          <Input label="Quantidade de Ração por Refeição" />
        </FieldsWrapper>

        <TimeList />

        <ButtonRegisterPet>
          <ButtonRegisterPetText>Cadastrar Pet</ButtonRegisterPetText>
        </ButtonRegisterPet>
      </Content>
    </Container>
  );
}
