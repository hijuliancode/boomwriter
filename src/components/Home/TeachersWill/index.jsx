import React from 'react'
import styled from 'styled-components';

const TeachersWillElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const TeachersWillComponent = () => {
  return (
    <TeachersWillElm>
      TeachersWillComponent works!
    </TeachersWillElm>
  );
}
 
export default TeachersWillComponent;