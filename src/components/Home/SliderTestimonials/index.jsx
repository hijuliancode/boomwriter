import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  SliderTestimonialsElm,
} from './style';

const SliderTestimonialsComponent = () => {
  const sliderTestimonialsData = HOME_API.getSliderTestimonialsData();

  return (
    <SliderTestimonialsElm>
      SliderTestimonialsComponent works!
    </SliderTestimonialsElm>
  );
}
 
export default SliderTestimonialsComponent;