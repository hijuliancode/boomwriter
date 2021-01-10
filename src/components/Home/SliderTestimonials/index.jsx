import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  SliderTestimonialsElm,
  Title,
  Description,
  Testimonials,
  TestimonialCard,
  TwitterIcon,
  User,
} from './style.js';

const SliderTestimonialsComponent = () => {
  const sliderTestimonialsData = HOME_API.getSliderTestimonialsData();

  return (
    <SliderTestimonialsElm>
      <Title>{ sliderTestimonialsData.title }</Title>
      <Description>{ sliderTestimonialsData.description }</Description>
      
      {
        sliderTestimonialsData.testimonials && (
          <Testimonials>
            {
              sliderTestimonialsData.testimonials.map(testm => (
                <TestimonialCard>
                  <TwitterIcon href={testm.tweetUrl} target="_blank">
                    <img src="https://boomwriter.com/static/media/twitter.591ff2a4.svg" alt="" />
                  </TwitterIcon>
                  <p>{ testm.text }</p>
                  <User href={ testm.tweetUrl } title={ testm.user.username + ' - ' +  testm.user.occupation} target="_blank" >
                    <img src={ testm.user.avatar } alt={ testm.user.username } />
                    <strong>{ testm.user.username }</strong>
                    <p>{ testm.user.occupation }</p>
                  </User>
                </TestimonialCard>
              ))
            }
          </Testimonials>
        )
      }
    </SliderTestimonialsElm>
  );
}
 
export default SliderTestimonialsComponent;