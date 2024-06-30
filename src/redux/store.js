import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
