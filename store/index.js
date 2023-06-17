import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './posts-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
