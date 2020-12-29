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
  padding: 0 12px;
  @media ${props => props.theme.MediaQueries.lg} {
    padding: 0 24px;
  }
`;

const HomeComponent = () => {
  return (
    <HomeElm>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque neque explicabo, esse nihil, quod sint beatae laboriosam sapiente quae inventore laborum enim cupiditate tenetur. Nemo illo modi dolor mollitia?
      <hr/>
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