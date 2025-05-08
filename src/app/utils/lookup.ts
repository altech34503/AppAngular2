import { COUNTRIES } from './countries';
import { INDUSTRIES } from './industries';
import { INVESTMENT_SIZE } from './investment-sizes';

export const COUNTRY_MAP = COUNTRIES.reduce((map, country) => {
  map[country.id] = country.name;
  return map;
}, {} as { [key: number]: string });

export const INDUSTRY_MAP = INDUSTRIES.reduce((map, industry) => {
  map[industry.id] = industry.name;
  return map;
}, {} as { [key: number]: string });

export const INVESTMENT_SIZE_MAP = INVESTMENT_SIZE.reduce((map, size) => {
  map[size.id] = size.name;
  return map;
}, {} as { [key: number]: string });
