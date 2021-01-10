import React from 'react'
import HOME_API from "../../../services/homeAPI.service";
import Button from '../../shared/Button';

import {
  TeachersWillElm,
  TitleAndButton,
  Title,
  FeaturesList,
  Feature,
} from './style.js';

const TeachersWillComponent = () => {
  const teachersWillData = HOME_API.getTeachersWillData();

  return (
    <TeachersWillElm>
      <TitleAndButton className="TitleAndButton">
        <Title>{ teachersWillData.title }</Title>
        <Button type={ teachersWillData.button.type } value={ teachersWillData.button.text } style={ teachersWillData.button.style } width="auto" />
      </TitleAndButton>
      {
        teachersWillData.features && (
          <FeaturesList className="FeaturesList">
            {
              teachersWillData.features.map(feature => (
                <Feature key={ feature.key } className="Feature">
                  <h4>{ feature.title }</h4>
                  <p>{ feature.description }</p>
                </Feature>
              ))
            }
          </FeaturesList>
        )
      }
    </TeachersWillElm>
  );
}
 
export default TeachersWillComponent;