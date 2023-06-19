import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onboardingActions } from '@/store/onboarding-slice';
import Selection from './Selection';
import LocationDropDown from './SearchDropDown';
import SearchDropDown from './SearchDropDown';

const indianLocations = [
  'Mumbai, Maharashtra',
  'Delhi, Delhi',
  'Bangalore, Karnataka',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
  'Kolkata, West Bengal',
  'Aurangabad, Maharashtra',
  'Dhanbad, Jharkhand',
  'Amritsar, Punjab',
  'Navi Mumbai, Maharashtra',
  'Allahabad, Uttar Pradesh',
  'Ranchi, Jharkhand',
  'Howrah, West Bengal',
  'Coimbatore, Tamil Nadu',
  'Jabalpur, Madhya Pradesh',
  'Gwalior, Madhya Pradesh',
  'Vijayawada, Andhra Pradesh',
  'Jodhpur, Rajasthan',
  'Madurai, Tamil Nadu',
  'Raipur, Chhattisgarh',
  'Kota, Rajasthan',
  'Chandigarh, Chandigarh',
  'Guwahati, Assam',
  'Solapur, Maharashtra',
  'Hubballi-Dharwad, Karnataka',
  'Bareilly, Uttar Pradesh',
  'Moradabad, Uttar Pradesh',
  'Mysore, Karnataka',
  'Gurgaon, Haryana',
  'Aligarh, Uttar Pradesh',
  'Jalandhar, Punjab',
  'Tiruchirappalli, Tamil Nadu',
  'Bhubaneswar, Odisha',
  'Nashik, Maharashtra',
  'Ghaziabad, Uttar Pradesh',
  'Ludhiana, Punjab',
  'Agra, Uttar Pradesh',
  'Faridabad, Haryana',
  'Meerut, Uttar Pradesh',
  'Rajkot, Gujarat',
  'Kalyan-Dombivli, Maharashtra',
  'Vasai-Virar, Maharashtra',
  'Varanasi, Uttar Pradesh',
  'Srinagar, Jammu and Kashmir',
  'Aurangabad, Maharashtra',
  'Dhanbad, Jharkhand',
  'Amritsar, Punjab',
  'Navi Mumbai, Maharashtra',
  'Allahabad, Uttar Pradesh',
  'Ranchi, Jharkhand',
  'Howrah, West Bengal',
  'Coimbatore, Tamil Nadu',
  'Jabalpur, Madhya Pradesh',
  'Gwalior, Madhya Pradesh',
  'Vijayawada, Andhra Pradesh',
  'Jodhpur, Rajasthan',
  'Madurai, Tamil Nadu',
  'Raipur, Chhattisgarh',
  'Kota, Rajasthan',
  'Chandigarh, Chandigarh',
  'Guwahati, Assam',
  'Solapur, Maharashtra',
  'Hubballi-Dharwad, Karnataka',
  'Bareilly, Uttar Pradesh',
  'Moradabad, Uttar Pradesh',
  'Mysore, Karnataka',
  'Gurgaon, Haryana',
  'Aligarh, Uttar Pradesh',
  'Jalandhar, Punjab',
  'Tiruchirappalli, Tamil Nadu',
  'Bhubaneswar, Odisha',
  'Nashik, Maharashtra',
  'Ghaziabad, Uttar Pradesh',
  'Ludhiana, Punjab',
  'Agra, Uttar Pradesh',
  'Faridabad, Haryana',
  'Meerut, Uttar Pradesh',
  'Rajkot, Gujarat',
  'Kalyan-Dombivli, Maharashtra',
  'Vasai-Virar, Maharashtra',
  'Varanasi, Uttar Pradesh',
  'Srinagar, Jammu and Kashmir',
  'Aurangabad, Maharashtra',
  'Dhanbad, Jharkhand',
  'Amritsar, Punjab',
  'Navi Mumbai, Maharashtra',
  'Allahabad, Uttar Pradesh',
  'Ranchi, Jharkhand',
  'Howrah, West Bengal',
  'Coimbatore, Tamil Nadu',
  'Jabalpur, Madhya Pradesh',
  'Gwalior, Madhya Pradesh',
  'Vijayawada, Andhra Pradesh',
  'Jodhpur, Rajasthan',
  'Madurai, Tamil Nadu',
  'Raipur, Chhattisgarh',
  'Kota, Rajasthan',
  'Chandigarh, Chandigarh',
  'Guwahati, Assam',
  'Solapur, Maharashtra',
  'Hubballi-Dharwad, Karnataka',
  'Bareilly, Uttar Pradesh',
  'Moradabad, Uttar Pradesh',
];

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
        <SearchDropDown
          label1={'Current location'}
          label2={'Where are you currently located?'}
          dropdownList={indianLocations}
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
