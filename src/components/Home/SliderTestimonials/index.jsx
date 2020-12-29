import React from 'react'
import styled from 'styled-components';

const SliderTestimonialsElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const SliderTestimonialsComponent = () => {
  return (
    <SliderTestimonialsElm>
      SliderTestimonialsComponent works!
    </SliderTestimonialsElm>
  );
}
 
export default SliderTestimonialsComponent;