import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  KeyFeaturesElm,
  Title,
  FeaturesList,
  Feature,
  FeatureImage,
  FeatureName,
  FeatureTooltip,
} from './style.js';

const KeyFeaturesComponent = () => {
  const keyFeaturesData = HOME_API.getKeyFeaturesData();
  return (
    <KeyFeaturesElm>
      <Title>{ keyFeaturesData.title }</Title>

      {
        keyFeaturesData.features && (
          <FeaturesList>
            {
              keyFeaturesData.features.map(feature => (
                <Feature key={ feature.key }>
                  <FeatureImage>
                    <img src={ feature.iconUrl } alt={ feature.name } />
                  </FeatureImage>
                  <FeatureName>{ feature.name }</FeatureName>
                  <FeatureTooltip className="FeatureTooltip">
                    <strong>{ feature.name }</strong>
                    { feature.description }
                  </FeatureTooltip>
                </Feature>
              ))
            }
          </FeaturesList>
        )
      }
    </KeyFeaturesElm>
  );
}
 
export default KeyFeaturesComponent;