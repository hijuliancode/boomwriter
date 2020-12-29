import React from 'react'
import styled from 'styled-components';

const KeyFeaturesElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const KeyFeaturesComponent = () => {
  return (
    <KeyFeaturesElm>
      KeyFeaturesComponent works!
    </KeyFeaturesElm>
  );
}
 
export default KeyFeaturesComponent;