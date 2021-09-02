import { css } from 'styled-components';

export const mainTheme = {
  colors: {
    primaryBlack: '#000000',
    primaryWhite: '#fff',
    primaryYellow: '#FBB03B',
    blue: '#1A6EFF',
    lightBlue: '#E1ECFF',
    secondary: '#D8D8D8',
    tertiary: '#808080',
    facebook: '#3B5998',
    gmail: '#F1584D',
  },

  fontSizes: {
    xxs: '1.2rem',
    xs: '1.4rem',
    s: '1.6rem',
    l: '2rem',
    xl: '2.4rem',
    xxl: '3.4rem',
    xl2: '4.5rem',
    xl3: '5rem',
    xl4: '6.6rem',
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
    view: '15rem 0',
  },

  boxShadows: {
    modal:
      '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
  },

  mq: {
    tablet: '@media screen and (max-width: 1065px)',
    mobile: '@media screen and (max-width: 800px)',
  },

  mixins: {
    buttons: {
      primary: css`
        border: none;
        outline: none;
        padding: 1.2rem 2.5rem;
        border-radius: 2.5rem;
        color: #000;
        background-color: #fbb03b;
        font-weight: 600;
        font-size: 1.4rem;
      `,
    },

    secondary: css`
      border: 1px solid #d8d8d8;
      background-color: #fff;
    `,
  },
};
