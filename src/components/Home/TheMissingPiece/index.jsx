import React from 'react'
import styled from 'styled-components';

const TheMissingPieceElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const TheMissingPieceComponent = () => {
  return (
    <TheMissingPieceElm>
      TheMissingPieceComponent works!
    </TheMissingPieceElm>
  );
}
 
export default TheMissingPieceComponent;