import React from 'react';
import CompanyCard from '@/components/CompanyCard';
import JobsAndCompanies from '@/components/JobsAndCompanies';
import CanalLogo from '@/assets/CanalLogo.png';
import DegreedLogo from '@/assets/degreedLogo.png';
import DiscordLogo from '@/assets/DiscordLogo.jpeg';
import ListLogo from '@/assets/ListLogo.svg';
import ClockLogo from '@/assets/ClockLogo.svg';
import BookmarkLogo from '@/assets/BookmarkLogo.svg';
import BlackTick from '@/assets/BlackTick.svg';
import JobsCard from '@/components/JobsCard';
import MongoDbLogo from '@/assets/MongoDb.png';
import JpMorganLogo from '@/assets/JpMorgan.png';
import QualcommLogo from '@/assets/qualcomm.jpeg';

const CompanyFilter = [
  {
    id: 1,
    name: 'Location',
  },
  {
    id: 2,
    name: 'Stage',
  },
  {
    id: 3,
    name: 'Industry',
  },
  {
    id: 4,
    name: 'Size',
  },
];

const CompaniesList = [
  {
    id: 1,
    no_events: 44,
    no_jobs: 0,
    company: 'MongoDB',
    location: 'New York, NY',
    stage: 'Publicly Traded',
    employees: '1001-5000',
    logo: MongoDbLogo,
  },
  {
    id: 2,
    no_events: 99,
    no_jobs: 31,
    company: 'Qualcomm',
    location: 'San Diego, CA',
    stage: 'Publicly Traded',
    employees: '10000+',
    logo: QualcommLogo,
  },
  {
    id: 3,
    no_events: 0,
    no_jobs: 49,
    company: 'Morgan Stanley',
    location: 'New York, NY',
    stage: 'Publicly Traded',
    employees: '10000+',
    logo: JpMorganLogo,
  },
  {
    id: 4,
    no_events: 44,
    no_jobs: 0,
    company: 'MongoDB',
    location: 'New York, NY',
    stage: 'Publicly Traded',
    employees: '1001-5000',
    logo: MongoDbLogo,
  },
  {
    id: 5,
    no_events: 99,
    no_jobs: 31,
    company: 'Qualcomm',
    location: 'San Diego, CA',
    stage: 'Publicly Traded',
    employees: '10000+',
    logo: QualcommLogo,
  },
  {
    id: 6,
    no_events: 0,
    no_jobs: 49,
    company: 'Morgan Stanley',
    location: 'New York, NY',
    stage: 'Publicly Traded',
    employees: '10000+',
    logo: JpMorganLogo,
  },
];

const companies = () => {
  return (
    <div>
      <JobsAndCompanies
        Filters={CompanyFilter}
        CardList={CompaniesList}
        CardName={CompanyCard}
        Heading="Top Companies on untapped"
        isDropDown={false}
      />
    </div>
  );
};

export default companies;
