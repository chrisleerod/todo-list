import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import Providers from './providers';

import App from '.';

const Root = ({ store, persistor }) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Providers store={store}>
        <App />
      </Providers>
    </PersistGate>
  );
};

export default Root;
