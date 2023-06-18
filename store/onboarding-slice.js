import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  linkedInUrl: '',
  linkedInUrlError: false,
  isAuthorized: null,
  needSponsorship: null,
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

    setAuthorized(state, action) {
      state.isAuthorized = action.payload;
    },

    setNeedSponsorship(state, action) {
      state.needSponsorship = action.payload;
    },
  },
});

export const onboardingActions = onboardingSlice.actions;

export default onboardingSlice;
