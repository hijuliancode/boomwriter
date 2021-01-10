import React from 'react'

import WRITINGBEE_API from "../../../services/writingBeeAPI.service";

import {
  HeroTheWritingBeeElm,
} from './style.js';

const HeroTheWritingBeeComponent = () => {

  const heroData = WRITINGBEE_API.getHeroData();

  return (
    <HeroTheWritingBeeElm>
    </HeroTheWritingBeeElm>
  );
}
 
export default HeroTheWritingBeeComponent;