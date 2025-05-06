import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member'; // create this model if it doesn't exist

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = 'http://localhost:5097/api'; // match your API port

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.baseUrl}/member`);
  }

  getMember(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/member/${id}`);
  }

  createMember(member: Member): Observable<any> {
    return this.http.post(`${this.baseUrl}/member`, member);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/member/${id}`);
  }

  updateMember(member: Member): Observable<any> {
    return this.http.put(`${this.baseUrl}/member`, member);
  }

  addMember(member: Member): Observable<any> {
    return this.http.post(`${this.baseUrl}/member`, member);
  }
}
