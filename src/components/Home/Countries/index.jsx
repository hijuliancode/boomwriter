import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  CountriesElm,
  Title,
  CountriesImage,
} from './style';

const CountriesComponent = () => {
  const countriesData = HOME_API.getCountriesData();

  return (
    <CountriesElm>
      <Title>{ countriesData.title }</Title>
      <CountriesImage>
        <img src={ countriesData.imageUrl } alt={ countriesData.title } />
      </CountriesImage>
    </CountriesElm>
  );
}
 
export default CountriesComponent;