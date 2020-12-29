import React from 'react'
import styled from 'styled-components';

const CountriesElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const CountriesComponent = () => {
  return (
    <CountriesElm>
      CountriesComponent works!
    </CountriesElm>
  );
}
 
export default CountriesComponent;