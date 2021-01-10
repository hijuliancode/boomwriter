import React from 'react'
import HOME_API from "../../../services/homeAPI.service";
import Button from '../../shared/Button';

import {
  TeachersWillElm,
  Title,
  FeaturesList,
  Feature,
} from './style';

const TeachersWillComponent = () => {
  const teachersWillData = HOME_API.getTeachersWillData();

  return (
    <TeachersWillElm>
      <Title>{ teachersWillData.title }</Title>
      <Button type={ teachersWillData.button.type } value={ teachersWillData.button.text } style={ teachersWillData.button.style } width="auto" />
      {
        teachersWillData.features && (
          <FeaturesList>
            {
              teachersWillData.features.map(feature => (
                <Feature className="Feature">
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