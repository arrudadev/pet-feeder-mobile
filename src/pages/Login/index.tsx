import React from 'react';
import { Alert } from 'react-native';

import * as Google from 'expo-google-app-auth';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';

import { getEnvVars } from '../../../environment';
import dogImg from '../../assets/dog.png';
import googleIconImg from '../../assets/google-icon.png';
import { auth } from '../../services/firebase';
import {
  Container,
  GoogleButton,
  GoogleButtonIcon,
  GoogleButtonIconWrapper,
  GoogleButtonText,
  GoogleButtonTextWrapper,
  Image,
  SubTitle,
  Title,
  Wrapper,
} from './styles';

const { androidClientId } = getEnvVars();

export function Login() {
  const navigation = useNavigation();

  async function handleLogin() {
    try {
      const result = await Google.logInAsync({
        clientId: androidClientId,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        const credential = GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken,
        );

        signInWithCredential(auth, credential);

        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
      }
    } catch (err) {
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Alimente {'\n'}
          seu Pet de {'\n'}
          forma fácil
        </Title>

        <Image source={dogImg} resizeMode="contain" />

        <SubTitle>
          Cuide da saúde do seu pet, alimente ele com a quantidade correta e nos
          horários corretos, nós te ajudamos a fazer isso.
        </SubTitle>

        <GoogleButton onPress={() => handleLogin()}>
          <GoogleButtonIconWrapper>
            <GoogleButtonIcon source={googleIconImg} resizeMode="contain" />
          </GoogleButtonIconWrapper>

          <GoogleButtonTextWrapper>
            <GoogleButtonText>Entrar com Google</GoogleButtonText>
          </GoogleButtonTextWrapper>
        </GoogleButton>
      </Wrapper>
    </Container>
  );
}
