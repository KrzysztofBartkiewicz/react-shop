import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyles/GlobalStyle';
import { mainTheme } from '../themes/mainTheme';

const GlobalStylesTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalStylesTemplate;
