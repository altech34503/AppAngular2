import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Startup } from '../models/startup'; // create this model if it doesn't exist

@Injectable({
  providedIn: 'root',
})
export class StartupsService {
  baseUrl: string = 'http://localhost:5097/api'; // match your API port

  constructor(private http: HttpClient) {}

  getStartups(): Observable<Startup[]> {
    console.log('Requesting:', `${this.baseUrl}/startup`);
    return this.http.get<Startup[]>(`${this.baseUrl}/startup`);
  }

  getStartup(id: number): Observable<Startup> {
    return this.http.get<Startup>(`${this.baseUrl}/startup/${id}`);
  }

  createStartup(startup: Startup): Observable<any> {
    return this.http.post(`${this.baseUrl}/startup`, startup);
  }

  deleteStartup(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/startup/${id}`);
  }

  updateStartup(startup: Startup): Observable<any> {
    return this.http.put(`${this.baseUrl}/startup`, startup);
  }

  addStartup(startup: Startup): Observable<any> {
    return this.http.post(`${this.baseUrl}/startup`, startup);
  }
}
