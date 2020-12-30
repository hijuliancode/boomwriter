import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    font-family: ${props => props.theme.typography.primary.name};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    position: relative;
    h1, h2, h3, h4, h5, h6 { margin-top: 0; line-height: 1; }
    p { margin-top: 0; line-height: 1.2 }
    .text-center { text-align: center; }
  }
  code { font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace; }
  @keyframes animation-skeleton {0%{background-position:-200px 0;}100%{background-position:calc(200px + 100%) 0;}}
  a { text-decoration: none; }

  .show-on-desktop {
    display: none;
    @media ${props => props.theme.MediaQueries.lg} {
      display: block;
    }
  }
  .show-on-mobile {
    display: block;
    @media ${props => props.theme.MediaQueries.lg} {
      display: none;
    }
  }

  nav a.selected {
    text-shadow: 0 0px 1px;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    position: relative;
    width: 100%;
    @media ${props => props.theme.MediaQueries.lg} {
      width: 992px;
      padding-left: 24px;
      padding-right: 24px;
    }
    @media ${props => props.theme.MediaQueries.xl} {
      width: 1200px;
    }
  }

`;

export default GlobalStyle;