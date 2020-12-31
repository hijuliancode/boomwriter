import React from 'react';
import HOME_API from "../../../services/homeAPI.service";
import Button from '../../shared/Button';

import {
  TheMissingPieceElm,
  TitleAndDescription,
  Title,
  Description,
  Items,
  CardPiece,
  BoxImageDemo,
} from './style';

const TheMissingPieceComponent = () => {
  const missingPieceData = HOME_API.getMissingPieceData();
  
  return (
    <TheMissingPieceElm>
      <TitleAndDescription>
        <h2></h2>
        <Title>{ missingPieceData.title }</Title>
        <Description>{ missingPieceData.description }</Description>
        <Button type={ missingPieceData.button.type } value={ missingPieceData.button.text } style={ missingPieceData.button.style } width="auto" />
      </TitleAndDescription>
      <div class="TheMissingPieceElm__areaA">
        <Items>
        </Items>
      </div>
      <div class="TheMissingPieceElm__areaA">
        <BoxImageDemo>
          <img />
        </BoxImageDemo>
      </div>
    </TheMissingPieceElm>
  );
}
 
export default TheMissingPieceComponent;