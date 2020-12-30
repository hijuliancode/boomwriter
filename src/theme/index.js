/** INDEX OF THEME
 * * Colors
 * * Typography
 * * Sizes
 * * Helpers
 * * Media Queries
 * * Skeleton
 */

/**
 * Colors
 */
  export const colors = {
    brand1: '#2b4e7b;',
    primary: '#065fe5',
    secondary: '#ffa826',
    success: '#C2DF0A',
    danger: '#E42525',
    warning: '#FFD100',
    info: '#0050B5',
    light: '#E5E5E5',
    dark: '#4b4a4a',
    muted: '#858585',
    black: '#131336',
    white: '#ffffff',
  };

/**
 * Typography
 */
  export const typography = {
    primary: {
      name: 'sofia-regular',
      weight: {
        '400': 400,
      }
    },
    secondary: {
      name: '',
      weight: {
        '100': 100
      }
    },
    literature: {
      name: '',
      weight: {
        '100': 100
      }
    },
  };

/**
 * Sizes
 */
  export const baseSize = 4;

/**
 * Helpers
 */
  export const isRadius = (_param) => baseSize * _param + 'px';

/**
 * Media Queries
 * xm (Mobile) < 576px
 * sm (Tablets Vertical) >= 576px
 * md (Tablets Horizontal) >= 768px
 * lg (Desktop) >= 992px
 * xl (Desktop large) >= 1200px
 */
  export const MediaQueries = {
    xm: 'screen and (max-width: 576px)',
    sm: 'screen and (min-width: 576px)',
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 992px)',
    xl: 'screen and (min-width: 1200px)'
  };

 /**
  * Skeleton
  */

  export const skeleton = `
    animation: animation-skeleton 1.2s ease-in-out infinite;
    background-color: #eee;
    background-image: linear-gradient( 90deg,#eee,#f5f5f5,#eee );
    background-repeat: no-repeat;
    background-size: 200px 100%;
    border-radius: 4px;
    display: inline-block;
    flex: 1;
    height: 100%;
    line-height: 1;
    width: 100%;
  `;