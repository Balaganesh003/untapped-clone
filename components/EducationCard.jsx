import React, { useState } from 'react';
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

const universities = [
  'Massachusetts Institute of Technology (MIT)',
  'Stanford University',
  'Harvard University',
  'California Institute of Technology (Caltech)',
  'University of Oxford',
  'University of Cambridge',
  'ETH Zurich - Swiss Federal Institute of Technology',
  'University of Chicago',
  'Princeton University',
  'Yale University',
  'Imperial College London',
  'University of Pennsylvania',
  'Johns Hopkins University',
  'Columbia University',
  'University of California, Berkeley (UCB)',
  'University of California, Los Angeles (UCLA)',
  'University College London (UCL)',
  'University of Michigan-Ann Arbor',
  'University of Toronto',
  'Cornell University',
  'Northwestern University',
  'National University of Singapore (NUS)',
  'Duke University',
  'University of Washington',
  'University of Edinburgh',
  'University of Tokyo',
  'Peking University',
  'University of Melbourne',
  'Tsinghua University',
  'University of Hong Kong (HKU)',
  'University of California, San Diego (UCSD)',
  'University of British Columbia',
  'University of Manchester',
  'London School of Economics and Political Science (LSE)',
  'University of California, San Francisco (UCSF)',
  'New York University (NYU)',
  'Seoul National University',
  'University of Sydney',
  'University of Bristol',
  'University of Wisconsin-Madison',
  'University of Copenhagen',
  'University of Amsterdam',
  'University of Queensland',
  'Australian National University',
  'University of Glasgow',
  'Hong Kong University of Science and Technology (HKUST)',
  'University of Texas at Austin',
  'University of Warwick',
  "King's College London",
  'Boston University',
];

const collegeSubjects = [
  'Accounting',
  'Agricultural Science',
  'Anthropology',
  'Architecture',
  'Art',
  'Biology',
  'Business Administration',
  'Chemical Engineering',
  'Chemistry',
  'Civil Engineering',
  'Communications',
  'Computer Science',
  'Criminal Justice',
  'Dental Hygiene',
  'Economics',
  'Education',
  'Electrical Engineering',
  'English',
  'Environmental Science',
  'Fashion Design',
  'Finance',
  'Graphic Design',
  'History',
  'Hospitality Management',
  'Human Resources',
  'Industrial Engineering',
  'Information Technology',
  'International Relations',
  'Journalism',
  'Marketing',
  'Mathematics',
  'Mechanical Engineering',
  'Music',
  'Nursing',
  'Nutrition',
  'Philosophy',
  'Photography',
  'Physics',
  'Political Science',
  'Psychology',
  'Public Health',
  'Sociology',
  'Software Engineering',
  'Statistics',
  'Theater',
  'Urban Planning',
  'Veterinary Science',
  'Web Development',
  'Zoology',
];

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
