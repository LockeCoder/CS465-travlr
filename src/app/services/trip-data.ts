import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  _id?: string;
  code: string;
  name: string;
  length: string;
  start: string;
  resort: string;
  perPerson: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }

  getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${code}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip);
  }

  updateTrip(originalCode: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiBaseUrl}/trips/${originalCode}`, trip);
  }

  deleteTrip(code: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/trips/${code}`);
  }
}