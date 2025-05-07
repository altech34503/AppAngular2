import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Investor } from '../models/investor';

@Injectable({
  providedIn: 'root',
})
export class InvestorsService {
  private apiUrl = 'http://localhost:5097/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all investors
  getInvestors(): Observable<Investor[]> {
    return this.http.get<Investor[]>(`${this.apiUrl}/investor`).pipe(
      tap((investors) => console.log('API Response:', investors)) // Log the response
    );
  }

  // Fetch a single investor by ID
  getInvestorById(id: number): Observable<Investor> {
    return this.http.get<Investor>(`${this.apiUrl}/investor/${id}`);
  }

  // Update an existing investor
  updateInvestor(id: number, investor: Investor): Observable<Investor> {
    return this.http.put<Investor>(`${this.apiUrl}/investor/${id}`, investor);
  }

  // Add a new investor
  addInvestor(investor: Investor): Observable<Investor> {
    return this.http.post<Investor>(`${this.apiUrl}/investor`, investor);
  }

  // Delete an investor
  deleteInvestor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/investor/${id}`);
  }
}