import { combineReducers, configureStore } from '@reduxjs/toolkit';

import testSlice from './testSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  test: testSlice,
  auth: authSlice,
});

const store = configureStore({ reducer: rootReducer });

export { store };
