export interface Investor {
  member_Id?: number;
  name_Investor: string; // Match the backend property name
  overview_Investor: string; // Match the backend property name
  country_Id: number; // Match the backend property name
  industry_Id: number; // Match the backend property name
  investment_Size_Id?: number; // Optional if not returned by the backend
}