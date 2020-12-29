import React from 'react'
import styled from 'styled-components';

const HeroHomeElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const HeroHomeComponent = () => {
  return (
    <HeroHomeElm>
      HeroHomeComponent works!
    </HeroHomeElm>
  );
}
 
export default HeroHomeComponent;