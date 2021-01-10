import styled from 'styled-components';

const FooterElement = styled.footer`
  background-color: ${props => props.theme.colors.brand1};
  display: block;
  margin-top: auto;
  padding: 16px 24px;
  @media ${props => props.theme.MediaQueries.lg} {}
`;
const FooterSideA = styled.div`
  text-align: center;
`;
  const FooterLogo = styled.img`
    max-width: 100%;
    margin-bottom: 8px;
  `;
  const FooterSocial = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    a {
      align-items: center;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 100%;
      display: inline-flex;
      height: 28px;
      justify-content: center;
      padding: 4px;
      width: 28px;
      :not(:first-child) {
        margin-left: 4px;
      }
      img {
        max-height: calc(100% - 2px);
        max-width: calc(100% - 2px);
      }
    }
  `;
  const FooterAddress = styled.div`
    color: ${props => props.theme.colors.white};
    font-size: 12px;
    margin-bottom: 16px;
    text-align: center;
  `;
const FooterSideB = styled.div``;
  const FooterNav = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    .menu__subtitle {
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      text-transform: uppercase;
      a { color: ${props => props.theme.colors.white}; }
    }
  `;
  const FooterNav__Menu = styled.nav`
    margin-bottom: 16px;
    a {
      color: ${props => props.theme.colors.light2};
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }
  `;

const FooterCopyright = styled.p`
  color: ${props => props.theme.colors.light2};
  font-size: 12px;
  text-align: center;
`;

export {
  FooterElement,
  FooterSideA,
  FooterLogo,
  FooterSocial,
  FooterAddress,
  FooterSideB,
  FooterNav,
  FooterNav__Menu,
  FooterCopyright,
}