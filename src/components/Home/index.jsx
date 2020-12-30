import React from 'react'
import styled from 'styled-components';
import HeroHomeComponent from './HeroHome';
import ConsistencyComponent from './Consistency';
import TheMissingPieceComponent from './TheMissingPiece';
import TeachersToolboxComponent from './TeachersToolbox';
import KeyFeaturesComponent from './KeyFeatures';
import TeachersWillComponent from './TeachersWill';
import CountriesComponent from './Countries';
import SliderTestimonialsComponent from './SliderTestimonials';
import AwardsComponent from './Awards';

const HomeElm = styled.div`
  padding: 50px 12px 0;
  @media ${props => props.theme.MediaQueries.lg} {
    padding: 50px 24px 0;
  }
`;

const HomeComponent = () => {
  return (
    <HomeElm className="container">
      <HeroHomeComponent />
      <ConsistencyComponent />
      <TheMissingPieceComponent />
      <TeachersToolboxComponent />
      <KeyFeaturesComponent />
      <TeachersWillComponent />
      <CountriesComponent />
      <SliderTestimonialsComponent />
      <AwardsComponent />
    </HomeElm>
  );
}
 
export default HomeComponent;