import React from 'react'
import styled from 'styled-components';

const AwardsElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const AwardsComponent = () => {
  return (
    <AwardsElm>
      AwardsComponent works!
    </AwardsElm>
  );
}
 
export default AwardsComponent;