import React from 'react';
import SearchDropDown from '@/components/SearchDropDown';
import { useSelector, useDispatch } from 'react-redux';
import { onboardingActions } from '@/store/onboarding-slice';
import MonthYear from './MonthYear';
import DropDown from './DropDown';

const degrees = [
  { value: 'select', label: 'Select degree' },
  { value: 'associate', label: 'Associate Degree' },
  { value: 'bachelor', label: "Bachelor's Degree" },
  { value: 'master', label: "Master's Degree" },
  { value: 'doctorate', label: 'Doctorate Degree' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'certificate', label: 'Certificate' },
  { value: 'professional', label: 'Professional Degree' },
  { value: 'highschool', label: 'High School Diploma' },
  { value: 'mba', label: 'Master of Business Administration (MBA)' },
  { value: 'phd', label: 'Doctor of Philosophy (Ph.D.)' },
  { value: 'md', label: 'Doctor of Medicine (M.D.)' },
  { value: 'jd', label: 'Juris Doctor (J.D.)' },
  { value: 'msc', label: 'Master of Science (M.Sc.)' },
  { value: 'ma', label: 'Master of Arts (M.A.)' },
  { value: 'mfa', label: 'Master of Fine Arts (MFA)' },
  { value: 'bs', label: 'Bachelor of Science (B.S.)' },
  { value: 'ba', label: 'Bachelor of Arts (B.A.)' },
  { value: 'bba', label: 'Bachelor of Business Administration (BBA)' },
  { value: 'beng', label: 'Bachelor of Engineering (B.Eng.)' },
  { value: 'llb', label: 'Bachelor of Laws (LL.B.)' },
  { value: 'mbbs', label: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)' },
  { value: 'bpharm', label: 'Bachelor of Pharmacy (B.Pharm)' },
  { value: 'bhsc', label: 'Bachelor of Health Sciences (B.H.Sc.)' },
  { value: 'btech', label: 'Bachelor of Technology (B.Tech)' },
  { value: 'ms', label: 'Master of Surgery (M.S.)' },
  { value: 'mres', label: 'Master of Research (M.Res)' },
  { value: 'mpharm', label: 'Master of Pharmacy (M.Pharm)' },
  { value: 'mphil', label: 'Master of Philosophy (M.Phil)' },
  { value: 'llm', label: 'Master of Laws (LL.M.)' },
  { value: 'mdes', label: 'Master of Design (M.Des)' },
  { value: 'mba', label: 'Master of Business Administration (MBA)' },
  { value: 'msc', label: 'Master of Science (M.Sc.)' },
  { value: 'ma', label: 'Master of Arts (M.A.)' },
  { value: 'mfa', label: 'Master of Fine Arts (MFA)' },
  { value: 'msw', label: 'Master of Social Work (MSW)' },
  { value: 'msc', label: 'Master of Science (M.Sc.)' },
  { value: 'mres', label: 'Master of Research (M.Res)' },
  { value: 'mphil', label: 'Master of Philosophy (M.Phil)' },
  { value: 'msc', label: 'Master of Science (M.Sc.)' },
];

const Education = () => {
  const dispatch = useDispatch();

  const { startPeriod, endPeriod } = useSelector((state) => state.onboarding);

  const setStartPeriod = (value) => {
    dispatch(onboardingActions.setStartPeriod(value));
  };

  const setEndPeriod = (value) => {
    dispatch(onboardingActions.setEndPeriod(value));
  };
  return (
    <div className=" w-full h-full bg-white">
      <h1 className="text-[2rem] text-primary-text font-semibold leading-[125%] text-center mb-[1.5rem]">
        Education
      </h1>
      <div className=" w-full px-3 mt-[13px] ">
        <div className="flex pt-[1rem] pb-[2.4rem]">
          <input type="checkbox" className="mr-[10px] w-6 h-6 " />
          <label className="text-[1rem] text-primary-text leading-[1.375rem]">
            I&apos;m self-taught
          </label>
        </div>
        <div className="mb-4">
          <SearchDropDown
            label1="School/Traning"
            marginBottomLabel1="mb-[5px]"
            placeholder={'School/Traning'}
          />
        </div>

        <div className="flex gap-6 mb-4">
          <div className="flex-1">
            <MonthYear
              label={'Start year'}
              period={startPeriod}
              setPeriod={setStartPeriod}
            />
          </div>
          <div className="flex-1">
            <MonthYear
              label={'End date'}
              period={endPeriod}
              setPeriod={setEndPeriod}
            />
          </div>
        </div>

        <div className="flex gap-6 ">
          <div className="flex-1">
            <DropDown options={degrees} label={'Degree'} />
          </div>
          <div className="flex-1">
            <SearchDropDown
              label1="Major"
              marginBottomLabel1="mb-[5px]"
              placeholder={'Major'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
