import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateRegistrationService {
  /**
   * Base url to hit the backend api
   */
  private baseUrl = 'https://0nn472c959.execute-api.ap-south-1.amazonaws.com/dev';
  /**
   * Constructor for CandidateRegistrationService
   * @param http an instance of {@link HttpClient} to make HTTP requests
   */
  constructor(private http: HttpClient) {}

  public addCandidateRegistration(): Observable<any> {
    const requestBody = {
      id: 1,
      name: 'Sneha Devadiga',
      contactDetails: 9702005409,
      skill: 'Java Backend Engineer',
      'years of experience': 9,
    };
    return this.http.post<any>(this.baseUrl, requestBody);
  }
}
