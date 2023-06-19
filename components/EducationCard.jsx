import React, { useState } from 'react';
import SearchDropDown from '@/components/SearchDropDown';
import { useSelector, useDispatch } from 'react-redux';
import { onboardingActions } from '@/store/onboarding-slice';
import MonthYear from './MonthYear';
import DropDown from './DropDown';
import { universities, degrees, collegeSubjects } from '@/data';

const EducationCard = () => {
  const dispatch = useDispatch();

  const { startPeriod, endPeriod } = useSelector((state) => state.onboarding);

  const setStartPeriod = (value) => {
    dispatch(onboardingActions.setStartPeriod(value));
  };

  const setEndPeriod = (value) => {
    dispatch(onboardingActions.setEndPeriod(value));
  };

  const [fields, setFields] = useState([]);

  const addField = (type) => {
    setFields([...fields, { type }]);
  };

  return (
    <div className="w-full ">
      <div className="mb-4">
        <SearchDropDown
          label1="School/Training"
          marginBottomLabel1="mb-[5px]"
          placeholder="School/Training"
          dropdownList={universities}
        />
      </div>

      <div className="flex gap-6 mb-4">
        <div className="flex-1">
          <MonthYear
            label="Start year"
            period={startPeriod}
            setPeriod={setStartPeriod}
          />
        </div>
        <div className="flex-1">
          <MonthYear
            label="End date"
            period={endPeriod}
            setPeriod={setEndPeriod}
          />
        </div>
      </div>

      <div className="flex gap-6 ">
        <div className="flex-1 ">
          <DropDown options={degrees} label="Degree" />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <SearchDropDown
            label1="Major"
            marginBottomLabel1="mb-[5px]"
            placeholder="Major"
            dropdownList={collegeSubjects}
          />
          {fields.map((field, index) => (
            <SearchDropDown
              key={index}
              label1={`Additional ${field.type}`}
              marginBottomLabel1="mb-[5px]"
              placeholder={`Add ${field.type}`}
              dropdownList={collegeSubjects}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full justify-end gap-3 mt-[5px]">
        <button
          className="text-[0.875rem] leading-[130%] text-link font-semibold"
          onClick={() => addField('Major')}>
          Add a major
        </button>
        <button
          className="text-[0.875rem] leading-[130%] text-link font-semibold"
          onClick={() => addField('Minor')}>
          Add a minor
        </button>
      </div>
    </div>
  );
};

export default EducationCard;
