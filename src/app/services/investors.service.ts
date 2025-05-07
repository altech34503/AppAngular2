import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investor } from '../models/investor';

@Injectable({
  providedIn: 'root',
})
export class InvestorsService {
  private apiUrl = 'http://localhost:5097/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all investors
  getInvestors(): Observable<Investor[]> {
    return this.http.get<Investor[]>(`${this.apiUrl}/investor`); // Correct endpoint
  }

  // Fetch a single investor by ID
  getInvestorById(id: number): Observable<Investor> {
    return this.http.get<Investor>(`${this.apiUrl}/investor/${id}`); // Correct endpoint
  }

  // Add a new investor
  addInvestor(investor: Investor): Observable<Investor> {
    return this.http.post<Investor>(`${this.apiUrl}/investor`, investor); // Correct endpoint
  }

  // Update an existing investor
  updateInvestor(investor: Investor): Observable<Investor> {
    return this.http.put<Investor>(`${this.apiUrl}/investor/${investor.member_Id}`, investor); // Correct endpoint
  }

  // Delete an investor by ID
  deleteInvestor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/investor/${id}`); // Correct endpoint
  }

  // Get the next member ID
  getNextMemberId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/investor/next-member-id`);
  }
}