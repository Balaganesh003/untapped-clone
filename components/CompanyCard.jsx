import React from 'react';

const JobsFilter = [
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
    name: 'Company',
  },
  {
    id: 5,
    name: 'Job Title',
  },
  {
    id: 6,
    name: 'Experience Level',
  },
  {
    id: 7,
    name: 'ERGs',
  },
  {
    id: 8,
    name: 'Values',
  },
  {
    id: 9,
    name: 'Remote Culture',
  },
  {
    id: 10,
    name: 'Benefits',
  },
  {
    id: 11,
    name: 'Salary',
  },
];

const RecommendedDropdown = [
  {
    id: 1,
    name: 'Recommended',
    logo: ListLogo,
  },
  {
    id: 2,
    name: 'Newest',
    logo: ClockLogo,
  },
  {
    id: 3,
    name: 'Applied',
    logo: BlackTick,
  },
  {
    id: 4,
    name: 'Saved',
    logo: BookmarkLogo,
  },
];

const JobsList = [
  {
    id: 1,
    role: 'Senior Software Engineer - Front End - Bengaluru',
    company: 'Degreed',
    location: 'Bengaluru, Ka',
    type: 'Full Time',
    remote: true,
    logo: DegreedLogo,
    no_of_applicants: 12,
  },
  {
    id: 2,
    role: 'Product Engineering Intern - Design Systems',
    company: 'Discord',
    location: 'San Framcosco, CA',
    type: 'Internship',
    remote: true,
    logo: DiscordLogo,
    no_of_applicants: 100,
  },
  {
    id: 3,
    role: 'Senior Frontend Software Engineer',
    company: 'Canal',
    location: 'San Framcosco, CA',
    type: 'Full Time',
    remote: true,
    logo: CanalLogo,
    no_of_applicants: 50,
  },
  {
    id: 4,
    role: 'Senior Software Engineer - Front End - Bengaluru',
    company: 'Degreed',
    location: 'Bengaluru, Ka',
    type: 'Full Time',
    remote: true,
    logo: DegreedLogo,
    no_of_applicants: 12,
  },
  {
    id: 5,
    role: 'Product Engineering Intern - Design Systems',
    company: 'Discord',
    location: 'San Framcosco, CA',
    type: 'Internship',
    remote: true,
    logo: DiscordLogo,
    no_of_applicants: 10,
  },
  {
    id: 6,
    role: 'Senior Frontend Software Engineer',
    company: 'Canal',
    location: 'San Framcosco, CA',
    type: 'Full Time',
    remote: true,
    logo: CanalLogo,
    no_of_applicants: 3,
  },
];

const CompanyCard = () => {
  return <div>CompanyCard</div>;
};

export default CompanyCard;
