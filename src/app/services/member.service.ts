import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member'; // Ensure this model exists

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = 'http://localhost:5097/api'; // Update this to match your backend API URL

  constructor(private http: HttpClient) {}

  /**
   * Get all members
   */
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/member`);
  }

  /**
   * Get a single member by ID
   * @param id - Member ID
   */
  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/member/${id}`);
  }

  /**
   * Create a new member
   * @param member - Member object
   */
  createMember(member: Member): Observable<any> {
    console.log('Form Submitted:', member);
    return this.http.post(`${this.baseUrl}/member`, member);
  }

  /**
   * Update an existing member
   * @param member - Member object
   */
  updateMember(member: Member): Observable<any> {
    return this.http.put(`${this.baseUrl}/member`, member);
  }

  /**
   * Delete a member by ID
   * @param id - Member ID
   */
  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/member/${id}`);
  }

  /**
   * Add a new member (alias for createMember)
   * @param member - Member object
   */
  addMember(member: Member): Observable<any> {
    return this.http.post(`${this.baseUrl}/member`, member);
  }
}
