import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import { DetailHeader } from '../../components/Headers/DetailHeader';
import { Input } from '../../components/Input';
import {
  ButtonSave,
  ButtonSaveText,
  Container,
  Text,
  WifiWrapper,
  Wrapper,
} from './styles';

export function DevicePairing() {
  const deviceAccessPointName = 'TESTE';

  return (
    <Container>
      <DetailHeader title="Parear Dispositivo (Modo AP)" />

      <Wrapper>
        <Text>Conecte o seu Celular no Wifi</Text>

        <WifiWrapper>
          <AntDesign name="wifi" size={72} color="black" />

          <Text>{deviceAccessPointName}</Text>
        </WifiWrapper>

        <Text>
          Depois de Conectado no Wifi {deviceAccessPointName}, selecione a baixo
          o nome da sua Rede Wifi e digite suas credenciais e salve.
        </Text>

        <Text>
          Após isso o seu Alimentador vai estar conectado na sua rede Wifi e
          pronto para começar a alimentar seus Pets.
        </Text>

        <Input label="Wifi" />

        <Input label="Senha" />

        <ButtonSave>
          <ButtonSaveText>Salvar</ButtonSaveText>
        </ButtonSave>
      </Wrapper>
    </Container>
  );
}
