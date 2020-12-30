import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  ConsistencyElm,
} from './style';

const ConsistencyComponent = () => {
  const consistencyData = HOME_API.getConsistencyData();

  return (
    <ConsistencyElm>
      ConsistencyComponent works!
    </ConsistencyElm>
  );
}
 
export default ConsistencyComponent;