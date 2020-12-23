import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './index.style';
import Root from './components/app/root';
import { config } from './store/config';

const { store, persistor } = config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ fontFamily: 'Inter' }}>
      <Root store={store} persistor={persistor} />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
