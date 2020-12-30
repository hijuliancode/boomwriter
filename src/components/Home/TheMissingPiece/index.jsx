import React from 'react';
import HOME_API from "../../../services/homeAPI.service";

import {
  TheMissingPieceElm,
} from './style';

const TheMissingPieceComponent = () => {
  const missingPieceData = HOME_API.getMissingPieceData();
  
  return (
    <TheMissingPieceElm>
      TheMissingPieceComponent works!
    </TheMissingPieceElm>
  );
}
 
export default TheMissingPieceComponent;