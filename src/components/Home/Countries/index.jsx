import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  CountriesElm,
} from './style';

const CountriesComponent = () => {
  const countriesData = HOME_API.getCountriesData();

  return (
    <CountriesElm>
      CountriesComponent works!
    </CountriesElm>
  );
}
 
export default CountriesComponent;