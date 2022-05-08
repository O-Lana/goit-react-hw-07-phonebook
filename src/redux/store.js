import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { itemsSlice } from './itemsSlice';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig  = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
});

export const persistor = persistStore(store);