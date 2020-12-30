import React from 'react'
import HOME_API from "../../../services/homeAPI.service";

import {
  TeachersToolboxElm,
} from './style';

const TeachersToolboxComponent = () => {
  const teachersToolboxData = HOME_API.getTeacherToolboxData();

  return (
    <TeachersToolboxElm>
      TeachersToolboxComponent works!
    </TeachersToolboxElm>
  );
}
 
export default TeachersToolboxComponent;