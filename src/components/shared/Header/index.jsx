import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Button from '../Button';

import GLOBAL_API from '../../../services/globalAPI.service';

import {
    HeaderElement,
    NavItems,
    NavSession,
    LogoImage,
    ButtonBurger,
    ButtonBurgerIcon,
    MobileContainer,
  } from './style.js'

const HeaderComponent = ({ headerStyle = 'primary' }) => {
  const [ openMenu, setOpenMenu ] = useState(false);

  const headerData = GLOBAL_API.getHeaderData();

  const renderNavItems = () => {
    return (
      <NavItems className="NavItems">
        { headerData.navItems.map( ( item ) => {
          return <NavLink to={ item.url } key={ item.id } activeClassName="selected">{ item.name }</NavLink>
        })}
      </NavItems>
    )
  }

  const renderNavSession = () => {
    return (
      <NavSession className="NavSession">
        <NavLink to={ headerData.login.url } activeClassName="selected" >{ headerData.login.text }</NavLink>
        <Button type={ headerData.button.type } value={ headerData.button.text } style={ headerData.button.style } width="auto" />
      </NavSession>
    )
  }

  const renderBurgerMenu = () => {
    return (
      <ButtonBurger open={ openMenu } onClick={ () => toggleMobileMenu() }>
        <ButtonBurgerIcon className="ButtonBurger__Icon" />
      </ButtonBurger>
    )
  }

  const toggleMobileMenu = () => {
    const newState = !openMenu;
    setOpenMenu(newState)
  }

  return (
    <>
    <HeaderElement open={ openMenu }>
      <Link to="/">
        <LogoImage src={ openMenu ? headerData.logoUrlWhite : headerData.logoUrl } />
      </Link>
      { renderNavItems() }
      { renderNavSession() }
      { renderBurgerMenu() }
    </HeaderElement>
    {
      <MobileContainer open={openMenu}>
        { renderNavItems() }
        { renderNavSession() }
      </MobileContainer>
    }
    </>
  );
}

HeaderComponent.propTypes = {
  headerStyle: PropTypes.string
}

export default HeaderComponent;