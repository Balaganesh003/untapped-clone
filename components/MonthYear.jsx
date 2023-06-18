import React from 'react';
import { set } from 'react-hook-form';

const MonthYear = ({ period, setPeriod, label }) => {
  const handlePeriod = (value) => {
    const sanitizedValue = value.replace(/\D/g, '');

    // Insert a slash after the first two digits (month)
    let formattedValue = sanitizedValue.replace(/(\d{2})/, '$1/');

    // Limit the year to 4 digits
    formattedValue = formattedValue.slice(0, 7);
    setPeriod(formattedValue);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value.length < period.length) {
      setPeriod(value);
    } else {
      handlePeriod(value);
    }
  };

  return (
    <div>
      <p className={`text-primary-text text-[0.875rem] mb-[5px] font-semibold`}>
        {label}
      </p>
      <input
        type="text"
        name="text"
        placeholder="MM/YYYY"
        value={period}
        onChange={(e) => handleInputChange(e)}
        className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] pl-[0.875rem] pr-[2.5rem]  mb-[0.8125rem]  text-primary-text border border-light-gray focus:outline-black`}
      />
    </div>
  );
};

export default MonthYear;
