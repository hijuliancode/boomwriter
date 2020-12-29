import styled, { css } from 'styled-components';

const HeaderElement = styled.header`
  align-items: center;
  display: flex;
  height: 50px;
  padding: 4px 32px;
  position: relative;
  z-index: 100;
  box-shadow: 0 0 30px -15px ${props => props.theme.colors.brand1};
  ${params => {
    return ( params.open )
    ? `
      background-color: transparent;
    `
    : `
      background-color: ${props => props.theme.colors.white};
    `
  }}
  .NavItems, .NavSession {
    display: none;
  }
  @media ${props => props.theme.MediaQueries.lg} {
    .NavItems, .NavSession {
      display: flex;
    }
  }
`;

const LogoImage = styled.img`
  margin-right: 32px;
  width: 120px;
`;

const NavItemStyle = css`
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 12px;
  @media ${props => props.theme.MediaQueries.lg} {
    color: ${props => props.theme.colors.brand1};
    display: inline-flex;
    font-size: 16px;
    margin-bottom: 0;
    :not(:first-child) {
      margin-left: 12px;
    }
  }
`;

const NavItems = styled.nav`
  padding: 32px;
  a {
    ${ NavItemStyle }
  }
  @media ${props => props.theme.MediaQueries.lg} {
    margin-right: auto;
    padding: 0;
  }
`;

const NavSession = styled.nav`
  padding: 32px;
  a {
    ${ NavItemStyle }
    margin-right: 16px;
  }
  button {
    max-width: auto;
  }
  @media ${props => props.theme.MediaQueries.lg} {
    align-items: center;
    display: flex;
    padding: 0;
  }
`;

const ButtonBurger = styled.button`
  align-items: center;
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  @media ${props => props.theme.MediaQueries.lg} {
    display: none;
  }
  ${params => {
    return ( params.open )
    ? `
      background-image: url(https://boomwriter.com/static/media/movileDecoration.5a73ad02.svg);
      background-image: url(https://boomwriter.com/static/media/movileDecorationActive.27a0f5fc.svg);
      .ButtonBurger__Icon {
        background: transparent;
        border: none;
        box-shadow: none;
        transform: translateX(-50px);
      }
      .ButtonBurger__Icon::before {
        transform: rotate(45deg) translate(35px, -35px);
      }
      .ButtonBurger__Icon::after {
        transform: rotate(-45deg) translate(35px, 35px);
      }
    `
    : `
      background-image: url(https://boomwriter.com/static/media/movileDecorationActive.27a0f5fc.svg);
      background-image: url(https://boomwriter.com/static/media/movileDecoration.5a73ad02.svg);
    `
  }}
`;

const BurgerLine = css`
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(255, 101, 47, 0.2);
  display: block;
  height: 4px;
  transition: all 0.3s ease-in-out;
  width: 28px;
`;

const ButtonBurgerIcon = styled.i`
  ${BurgerLine}
  margin: -4px -4px 0 0;
  :before,
  :after {
    ${BurgerLine}
    content: '';
    position: absolute;
  }
  :before {
    transform: translateY(-8px)
  }
  :after {
    transform: translateY(8px)
  }
`;

const MobileContainer = styled.div`
  background: linear-gradient(11.41deg, #077ca0 32.92%, #2b4e7b 83.21%);
  display: block;
  height: 100%;
  left: 0;
  padding-top: 50px;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 100%;
  ${params => {
    return ( params.open )
    ? `
      top: 0;
      opacity: 1;
    `
    : `
      top: -100%;
      opacity: 0;
    `
  }}
  @media ${props => props.theme.MediaQueries.lg} {
    display: none;
  }
`;

export {
  HeaderElement,
  NavItems,
  LogoImage,
  NavSession,
  ButtonBurger,
  ButtonBurgerIcon,
  MobileContainer,
}