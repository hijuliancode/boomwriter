import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  KeyFeaturesElm,
} from './style';

const KeyFeaturesComponent = () => {
  const keyFeaturesData = HOME_API.getKeyFeaturesData();

  return (
    <KeyFeaturesElm>
      KeyFeaturesComponent works!
    </KeyFeaturesElm>
  );
}
 
export default KeyFeaturesComponent;