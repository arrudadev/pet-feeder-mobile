import React from 'react';

import dogImg from '../../assets/dog.png';
import googleIconImg from '../../assets/google-icon.png';
import { useUser } from '../../hooks/useUser';
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

export function Login() {
  const { googleLogin } = useUser();

  async function handleLogin() {
    await googleLogin();
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
