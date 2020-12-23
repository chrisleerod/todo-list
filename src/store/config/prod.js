import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import rootReducer from '../reducer';

const config = () => {
  const persistConfig = {
    key: 'root',
    version: 0,
    storage
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }),
    devTools: false
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default { config };
