import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UrlField from './UrlField';
import { onboardingActions } from '@/store/onboarding-slice';
import DragDrop from './DragDrop';

const Resume = () => {
  const dispatch = useDispatch();

  const { linkedInUrl, linkedInUrlError } = useSelector(
    (state) => state.onboarding
  );

  const handleLinkedInUrl = (url) => {
    dispatch(onboardingActions.setLinkedInUrl(url));
  };

  const setLinkedInUrlError = (error) => {
    dispatch(onboardingActions.setLinkedInUrlError(error));
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <div className="w-full h-full bg-white flex-shrink-0">
      <h1 className="text-[2rem] text-primary-text font-semibold leading-[125%] text-center mb-[1.5rem]">
        Resume
      </h1>
      <div className="mt-[13px] px-3 mb-[20px]">
        <UrlField
          label="Add your LinkedIn URL"
          errorMessage="URL protocol required (e.g. https://)"
          Url={linkedInUrl}
          setUrl={handleLinkedInUrl}
          UrlError={linkedInUrlError}
          setUrlError={setLinkedInUrlError}
          placeholder="https://www.linkedin.com/in/yourprofile"
        />
      </div>
      {/* Upload resume */}
      <div className="px-3">
        <p className="text-primary-text text-[0.75rem] font-semibold leading-[130%]">
          Resume <span className="text-secondary-text font-normal">(opt.)</span>
        </p>
        <div className="mt-3 h-[7.1875rem]">
          <DragDrop handleFileSelect={handleFileSelect} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
