import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

import { HeaderElement } from './style'

const HeaderComponent = () => {
  return (
    <HeaderElement>
      <nav>
        <NavLink to="/home" activeClassName="selected">Home</NavLink>
        <NavLink to="/the-writing-bee" activeClassName="selected">The Writing Bee</NavLink>
      </nav>
    </HeaderElement>
  );
}
 
export default HeaderComponent;