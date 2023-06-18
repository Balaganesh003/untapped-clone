import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  linkedInUrl: '',
  linkedInUrlError: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setLinkedInUrl(state, action) {
      state.linkedInUrl = action.payload;
    },

    setLinkedInUrlError(state, action) {
      state.linkedInUrlError = action.payload;
    },

    checkLinkedInUrl(state) {
      if (state.linkedInUrlError === true) {
        state.linkedInUrl = '';
      }
    },
  },
});

export const onboardingActions = onboardingSlice.actions;

export default onboardingSlice;
