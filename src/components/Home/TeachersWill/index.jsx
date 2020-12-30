import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  TeachersWillElm,
} from './style';

const TeachersWillComponent = () => {
  const teachersWillData = HOME_API.getTeachersWillData();

  return (
    <TeachersWillElm>
      TeachersWillComponent works!
    </TeachersWillElm>
  );
}
 
export default TeachersWillComponent;