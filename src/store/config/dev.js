import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducer';

const config = () => {
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  const persistConfig = {
    key: 'tasks',
    version: 0,
    storage,
    debug: true
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(logger),
    devTools: true
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default { config };
