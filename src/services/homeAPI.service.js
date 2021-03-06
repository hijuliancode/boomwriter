import { guidGenerator as newId } from "../helpers/";

import heroData from '../data/home/hero.data';
import consistencyData from '../data/home/section-consistency.data';
import missingPieceData from '../data/home/section-missing-piece.data';
import teachersToolboxData from '../data/home/section-teachers-toolbox.data';
import keyFeaturesData from '../data/home/section-key-features.data';
import teachersWillData from '../data/home/section-teachers-will.data';
import countriesData from '../data/home/section-countries.data';
import testimonialsData from '../data/home/section-slider-testimonials.data';
import awardsData from '../data/home/section-awards.data';

// Data

const HOME_API = {
  getHeroData() {
    const data = heroData;
    return data;
  },
  getConsistencyData() {
    const data = consistencyData;
    return data;
  },
  getMissingPieceData() {
    const data = missingPieceData;
    return data;
  },
  getTeacherToolboxData() {
    const data = teachersToolboxData;
    return data;
  },
  getKeyFeaturesData() {
    const data = keyFeaturesData;
    data.features.forEach( feature => feature.key = newId());
    return data;
  },
  getTeachersWillData() {
    const data = teachersWillData;
    data.features.forEach( feature => feature.key = newId());
    return data;
  },
  getCountriesData() {
    const data = countriesData;
    return data;
  },
  getSliderTestimonialsData() {
    const data = testimonialsData;
    data.testimonials.forEach( testimonial => testimonial.key = newId());
    return data;
  },
  getAwardsData() {
    const data = awardsData;
    data.awards.forEach( award => award.key = newId())
    return data;
  },
}

export default HOME_API;