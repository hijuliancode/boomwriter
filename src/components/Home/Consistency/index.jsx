import React from 'react'
import styled from 'styled-components';

const ConsistencyElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const ConsistencyComponent = () => {
  return (
    <ConsistencyElm>
      ConsistencyComponent works!
    </ConsistencyElm>
  );
}
 
export default ConsistencyComponent;