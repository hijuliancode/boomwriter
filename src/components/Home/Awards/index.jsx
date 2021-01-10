import React from 'react';
import HOME_API from "../../../services/homeAPI.service";

import {
  AwardsElm,
  Title,
  TitleImage,
  Description,
  AwardsImagesBox,
  AwardImage,
} from './style.js';

const AwardsComponent = () => {
  const awardsData = HOME_API.getAwardsData();
  return (
    <AwardsElm>
      <Title>
        <TitleImage src={ awardsData.titleImageUrl } />
        { awardsData.title }
      </Title>
      <Description>{ awardsData.description }</Description>
      {
        awardsData.awards && (
          <AwardsImagesBox>
            {
              awardsData.awards.map(award => (
                <AwardImage src={ award.imageUrl } alt={ award.title } key={ award.key } />
              ))
            }
          </AwardsImagesBox>
        )
      }
    </AwardsElm>
  );
}
 
export default AwardsComponent;