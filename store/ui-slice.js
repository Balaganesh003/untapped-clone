import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isSearchOpen: false,
  isCreatePostOpen: false,
  isCreateCommunityOpen: false,
  isCreateCommunitySuccessOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
