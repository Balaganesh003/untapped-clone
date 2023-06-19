import React, { useState } from 'react';
import EducationCard from '@/components/EducationCard';
import BluePlusLogo from '@/assets/BluePlusLogo.svg';
import Image from 'next/image';
import SearchDropDown from './SearchDropDown';
import { collegeSubjects } from '@/data';
import TextEditor from './TextEditor';

const Education = () => {
  const [schools, setSchools] = useState([{}]);

  const [isSelfTaught, setIsSelfTaught] = useState(false);

  const addSchool = () => {
    setSchools([...schools, {}]);
    console.log(schools);
  };

  const removeSchool = (index) => {
    const updatedSchools = [...schools];
    updatedSchools.splice(index, 1);
    setSchools(updatedSchools);
  };

  return (
    <div className="w-full h-full bg-white px-3 ">
      <h1 className="text-[2rem] text-primary-text font-semibold leading-[125%] text-center mb-[1.5rem]">
        Education
      </h1>
      <div className="flex pt-[1rem] pb-[2.4rem]">
        <input
          type="checkbox"
          value={isSelfTaught}
          onChange={() => setIsSelfTaught(!isSelfTaught)}
          className="mr-[10px] w-6 h-6 "
        />
        <label className="text-[1rem] text-primary-text leading-[1.375rem]">
          I&apos;m self-taught
        </label>
      </div>
      {!isSelfTaught ? (
        <div>
          <div className="flex flex-col gap-[2.75rem]">
            {schools.map((school, index) => (
              <div key={index} className="relative ">
                <EducationCard />
                {index > 0 && (
                  <button
                    className="absolute top-0 right-0  leading-[130%] text-text-red  text-[0.875rem] "
                    onClick={() => removeSchool(index)}>
                    <span className="ml-1 leading-[130%]">Remove School</span>
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className=" mt-4">
            <button
              className="text-[0.875rem] p-[0.75rem] rounded-full leading-[130%] text-link font-semibold border border-link flex items-center"
              onClick={addSchool}>
              <Image src={BluePlusLogo} alt="plus logo" className="w-3 h-3" />
              <span className="ml-1 leading-[130%]"> Add another school</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <SearchDropDown
            label1="Self-Taught Discipline"
            placeholder="Discipline"
            dropdownList={collegeSubjects}
          />
          <div className="mt-4">
            <div>
              <TextEditor
                enableUnderline={true}
                enableLink={true}
                enableList={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
