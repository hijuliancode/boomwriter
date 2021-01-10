import React from 'react'

import HOME_API from "../../../services/homeAPI.service";

import {
  HeroInfoItemsElm,
  ItemInfo,
} from './style.js';

const HeroInfoItemsComponent = () => {

  const heroData = HOME_API.getHeroData();

  return (
    <HeroInfoItemsElm>
      {
        heroData.items.map( (item) => {
          return (
            <ItemInfo key={ item.text }>
              <img src={ item.imageUrl } alt={ item.text } />
              <p>{ item.text }</p>
              <strong>{ item.description }</strong>
            </ItemInfo>
          )})
      }
    </HeroInfoItemsElm>
  );
}
 
export default HeroInfoItemsComponent;