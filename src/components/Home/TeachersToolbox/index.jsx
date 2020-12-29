import React from 'react'
import styled from 'styled-components';

const TeachersToolboxElm = styled.div`
  @media ${props => props.theme.MediaQueries.lg} {}
`;

const TeachersToolboxComponent = () => {
  return (
    <TeachersToolboxElm>
      TeachersToolboxComponent works!
    </TeachersToolboxElm>
  );
}
 
export default TeachersToolboxComponent;