import React from 'react'
import HOME_API from "../../../services/homeAPI.service";
import Button from '../../shared/Button';

import {
  ConsistencyElm,
  Title,
  Description,
  ImageProcess,
  ImageWeek,
} from './style.js';

const ConsistencyComponent = () => {
  const consistencyData = HOME_API.getConsistencyData();

  return (
    <ConsistencyElm>
      <div className="ConsistencyElm__areaA">
        <ImageProcess src={ consistencyData.images.processImageUrl } />
      </div>
      <div className="ConsistencyElm__areaB">
        <ImageWeek src={ consistencyData.images.weekImageUrl } />
        <Title>{ consistencyData.title }</Title>
        <Description>{ consistencyData.description }</Description>
        <Button type={ consistencyData.button.type } value={ consistencyData.button.text } style={ consistencyData.button.style } width="auto" />
      </div>
    </ConsistencyElm>
  );
}
 
export default ConsistencyComponent;