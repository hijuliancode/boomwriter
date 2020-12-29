// import { guidGenerator as newId } from "../helpers/";

import heroData from "../data/thewritingbee/hero.data";
import partnersData from "../data/thewritingbee/partners.data";
import mainSliderData from "../data/thewritingbee/main-slider.data";
import timelineData from "../data/thewritingbee/section-timeline.data";
import bannerStepsData from "../data/thewritingbee/section-banner-steps.data";
import testimonialData from "../data/thewritingbee/section-testimonial.data";
import benefitsData from "../data/thewritingbee/section-benefits.data";
import FAQData from "../data/thewritingbee/section-faq.data";

const WRITINGBEE_API = {
  getHeroData() {
    const data = heroData;
    return data;
  },
  getPartnersData() {
    const data = partnersData;
    return data;
  },
  getMainSliderData() {
    const data = mainSliderData;
    return data;
  },
  getTimelineData() {
    const data = timelineData;
    return data;
  },
  getBannerStepsData() {
    const data = bannerStepsData;
    return data;
  },
  getTestimonialData() {
    const data = testimonialData;
    return data;
  },
  getBenefitsData() {
    const data = benefitsData;
    return data;
  },
  getFAQData() {
    const data = FAQData;
    return data;
  },
}

export default WRITINGBEE_API;