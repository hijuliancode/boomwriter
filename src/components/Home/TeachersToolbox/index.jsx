import React from 'react'
import HOME_API from "../../../services/homeAPI.service";
import Button from '../../shared/Button';

import {
  TeachersToolboxElm,
  Title,
  CardsSlider,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  SliderArrow,
} from './style.js';

const TeachersToolboxComponent = () => {
  const teachersToolboxData = HOME_API.getTeacherToolboxData();

  return (
    <TeachersToolboxElm>
      <Title>{ teachersToolboxData.title }</Title>
      <CardsSlider>
        { teachersToolboxData.items.map( (item) => {
          return (
            <Card key={ item.title }>
              <CardImage>
                <img src={ item.imageUrl } alt={ item.title } />
              </CardImage>
              <CardTitle>{ item.title }</CardTitle>
              <CardDescription>{ item.description }</CardDescription>
              <Button type={ item.button.type } value={ item.button.text } style={ item.button.style } width="auto" />
            </Card>
          )
        })}
      </CardsSlider>
    </TeachersToolboxElm>
  );
}
 
export default TeachersToolboxComponent;