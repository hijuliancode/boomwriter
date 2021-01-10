import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GLOBAL_API from '../../../services/globalAPI.service';

import {
    FooterElement,
    FooterSideA,
    FooterLogo,
    FooterSocial,
    FooterAddress,
    FooterSideB,
    FooterNav,
    FooterNav__Menu,
    FooterCopyright,

  } from './style.js'

const FooterComponent = () => {
  const footerData = GLOBAL_API.getFooterData();
  return (
    <FooterElement>
      <FooterSideA className="FooterSideA">
        <FooterLogo src={ footerData.logoUrl } alt="Improve Student Writing | Teachers Parents | Boomwriter" />
        {
          footerData.socialItems && (
            <FooterSocial>
              {
                footerData.socialItems.map(item => (
                  <a href={ item.link } title={ item.name } key={ item.name } >
                    <img src={ item.iconUrl } alt={ item.name } />
                  </a>
                ))
              }
            </FooterSocial>
          )
        }
        <FooterAddress>
          <p>
            { footerData.address.line1 } <br />
            { footerData.address.line2 } <br />
            { footerData.address.line3 }
          </p>
        </FooterAddress>
      </FooterSideA>
      <FooterSideB className="FooterSideB">
        {
          footerData.menu && (
            <FooterNav>
              {
                footerData.menu.map(menu => (
                  <FooterNav__Menu key={ menu.title }>
                    <h4 className="menu__subtitle">
                      <a href={ menu.titleUrl } title={ menu.title }>
                        { menu.title }
                      </a>
                    </h4>
                    {
                      menu.items && (
                        <FooterNav__Menu >
                          {
                            menu.items.map(item => (
                              <a href={ item.url } title={ item.text } key={ item.text }>
                                { item.text }
                              </a>
                            ))
                          }
                        </FooterNav__Menu>
                      )
                    }
                  </FooterNav__Menu>
                ))
              }
            </FooterNav>
          )
        }
      </FooterSideB>
      <FooterCopyright>{ footerData.copyright }</FooterCopyright>
    </FooterElement>
  );
}
 
export default FooterComponent;