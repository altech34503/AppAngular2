import { COUNTRIES } from './countries';

export const COUNTRY_MAP = COUNTRIES.reduce((map, country) => {
  map[country.id] = country.name;
  return map;
}, {} as { [key: number]: string });

export const INDUSTRY_MAP: { [key: number]: string } = {
  1: 'Technology',
  2: 'Healthcare',
  3: 'Finance',
};

export const INVESTMENT_SIZE_MAP: { [key: number]: string } = {
  1: 'Small',
  2: 'Medium',
  3: 'Large',
};