import React from 'react';
import ReactDOM from 'react-dom';
import AuthContextProvider from './providers/AuthContextProvider';
import Root from './Root/Root';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
