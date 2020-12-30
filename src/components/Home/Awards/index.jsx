import React from 'react';
import HOME_API from "../../../services/homeAPI.service";

import {
  AwardsElm,
} from './style';

const AwardsComponent = () => {
  const awardsData = HOME_API.getAwardsData();

  return (
    <AwardsElm>
      AwardsComponent works!
    </AwardsElm>
  );
}
 
export default AwardsComponent;