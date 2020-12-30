import React from 'react'
import Button from '../../shared/Button';

import HOME_API from "../../../services/homeAPI.service";

import {
  HeroHomeElm,
  ImageLogo,
  Title,
  Description,
  Recommended,
  HeroImage,
} from './style';

const HeroHomeComponent = () => {

  const heroData = HOME_API.getHeroData();

  return (
    <HeroHomeElm>
      <div className="HeroHomeElm__sideA">
        <ImageLogo src={ heroData.logoUrl } alt={ heroData.description } title={ heroData.description } />
        <Title dangerouslySetInnerHTML={{ __html: heroData.title }}></Title>
        <Description>{ heroData.description }</Description>
        <Button type={ heroData.button.type } value={ heroData.button.text } style={ heroData.button.style } width="auto" />
      </div>
      <div className="HeroHomeElm__sideB">
        <Recommended>{ heroData.recommended }</Recommended>
        <HeroImage src={ heroData.imageUrl } />
      </div>
    </HeroHomeElm>
  );
}
 
export default HeroHomeComponent;