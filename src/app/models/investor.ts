export interface Investor {
  memberId: number; // Maps to member_id in the database (foreign key from Member)
  nameInvestor: string; // Maps to name_investor in the database
  overviewInvestor: string; // Maps to overview_investor in the database
  countryId: number; // Maps to country_id in the database (foreign key from Country)
  industryId: number; // Maps to industry_id in the database (foreign key from Industry)
  investmentSizeId: number; // Maps to investment_size_id in the database (foreign key from InvestmentSize)
}
