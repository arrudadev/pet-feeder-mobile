import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Banner, Content, SubTitle, Title } from './styles';

type DetailBannerProps = {
  image: ImageSourcePropType;
  title?: string;
  subtitle?: string;
};

export function DetailBanner({ image, title, subtitle }: DetailBannerProps) {
  return (
    <Banner source={image}>
      <Content>
        {title && <Title>{title}</Title>}

        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </Content>
    </Banner>
  );
}
