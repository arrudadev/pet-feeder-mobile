import React from 'react';

import { Container, Image } from './styles';

type AvatarProps = {
  urlImage: string;
};

export function Avatar({ urlImage }: AvatarProps) {
  return (
    <Container>
      <Image source={{ uri: urlImage }} />
    </Container>
  );
}
