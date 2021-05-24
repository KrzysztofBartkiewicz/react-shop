import { css } from 'styled-components';

export const mainTheme = {
  colors: {
    primaryBlack: '#000000',
    primaryWhite: '#fff',
    primaryYellow: '#FBB03B',
    secondary: '#D8D8D8',
    tertiary: '#808080',
  },

  fontSizes: {
    xs: '0.8rem',
    s: '1rem',
    l: '1.2rem',
    xl: '1.4rem',
    xxl: '1.6rem',
    big: '1.9rem',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    semiBold: 500,
    bold: 600,
    extraBold: 700,
  },

  borderRadiuses: {
    primary: '2.5rem',
  },

  paddings: {
    primary: '1.2rem 2.5rem',
  },

  devices: {
    mobileXs: '320px',
    moblie: '420px',
  },
};

export const mixins = {
  baseShape: css`
    border: 1px solid ${mainTheme.colors.secondary};
    border-radius: 2.5rem;
    padding: 1.5rem 3rem;
  `,
};
