import React, { useState } from 'react';
import { Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import axios from 'axios';

import { DetailHeader } from '../../components/Headers/DetailHeader';
import { Input } from '../../components/Input';
import { usePet } from '../../hooks/usePet';
import {
  ButtonSave,
  ButtonSaveText,
  Container,
  Text,
  WifiWrapper,
  Wrapper,
} from './styles';

export function DevicePairing() {
  const { selectedPetId } = usePet();

  const deviceAccessPointSSID = 'PetFeeder-AP';
  const deviceAccessPointPassword = '12345678';

  const [ssid, setSSID] = useState('');
  const [password, setPassword] = useState('');

  async function handleSaveDevicePairing() {
    try {
      const deviceApi = axios.create({
        baseURL: 'http://192.168.111.111',
      });

      const response = await deviceApi.post('/config', {
        ssid,
        password,
        type: 'config',
        petId: selectedPetId,
      });

      const { status } = response.data;

      if (status === 'success') {
        Alert.alert('Sucesso', 'Pareamento de dispositivo bem-sucedido');
      }
    } catch (err) {
      Alert.alert('Erro', 'Ocorreu algum erro ao configurar o dispositivo');
    }
  }

  return (
    <Container>
      <DetailHeader title="Parear Dispositivo (Modo AP)" />

      <Wrapper>
        <Text>Conecte o seu Celular no Wifi</Text>

        <WifiWrapper>
          <AntDesign name="wifi" size={72} color="black" />

          <Text>SSID: {deviceAccessPointSSID}</Text>
          <Text>Senha: {deviceAccessPointPassword}</Text>
        </WifiWrapper>

        <Text>
          Depois de Conectado no Wifi {deviceAccessPointSSID}, digite a baixo o
          nome da sua Rede Wifi e digite suas credenciais e salve.
        </Text>

        <Text>
          Após isso o seu Alimentador vai estar conectado na sua rede Wifi e
          pronto para começar a alimentar seus Pets.
        </Text>

        <Input label="Wifi" value={ssid} onChangeText={setSSID} />

        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <ButtonSave onPress={() => handleSaveDevicePairing()}>
          <ButtonSaveText>Salvar</ButtonSaveText>
        </ButtonSave>
      </Wrapper>
    </Container>
  );
}
