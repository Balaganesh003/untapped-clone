import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onboardingActions } from '@/store/onboarding-slice';
import Selection from './Selection';
import LocationDropDown from './LocationDropDown';

const Authorization = () => {
  const dispatch = useDispatch();

  const { isAuthorized, needSponsorship } = useSelector(
    (state) => state.onboarding
  );

  const handleAuthorization = (value) => {
    dispatch(onboardingActions.setAuthorized(value));
  };

  const handleSponsorship = (value) => {
    dispatch(onboardingActions.setNeedSponsorship(value));
  };

  return (
    <div className="w-full h-full bg-white flex-shrink-0">
      <h1 className="text-[2rem] text-primary-text font-semibold leading-[125%] text-center mb-[1.5rem]">
        Work authorization
      </h1>
      <div className="mt-[13px]  px-3">
        <LocationDropDown
          label1={'Current location'}
          label2={'Where are you currently located?'}
        />
      </div>
      <div className="mt-[11px] pb-[13px] px-3">
        <Selection
          isTrue={isAuthorized}
          setSelection={handleAuthorization}
          label1={'Work Authorization'}
          label2={
            'Are you authorized to work in the US? This is only visible to recruiters'
          }
        />
      </div>
      <div className="mt-[12px] px-3 pb-[13px]">
        <Selection
          isTrue={needSponsorship}
          setSelection={handleSponsorship}
          label1={'Sponsorship?'}
          label2={
            'Do you or will you in the future require sponsorship? This is only visible to recruiters'
          }
        />
      </div>
    </div>
  );
};

export default Authorization;
