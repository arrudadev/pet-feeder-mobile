import React from 'react';

import { Avatar } from '../Avatar';
import {
  Container,
  Greeting,
  Message,
  User,
  UserName,
  Wrapper,
} from './styles';

export function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/monteiro-alexandre.png" />

      <Wrapper>
        <User>
          <Greeting>Olá</Greeting>

          <UserName>Alexandre</UserName>
        </User>

        <Message>Vamos cuidar do seus Pets</Message>
      </Wrapper>
    </Container>
  );
}
