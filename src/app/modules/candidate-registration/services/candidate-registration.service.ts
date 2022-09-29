import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationForm } from '../models/candidate';

@Injectable({
  providedIn: 'root',
})
export class CandidateRegistrationService {
  /**
   * Base url to hit the backend api
   */
  private baseUrl = 'https://jzoznlcnii.execute-api.ap-south-1.amazonaws.com/dev/';
  /**
   * Constructor for CandidateRegistrationService
   * @param http an instance of {@link HttpClient} to make HTTP requests
   */
  constructor(private http: HttpClient) {}

  public addCandidateRegistration(candidateDetails: RegistrationForm): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}registercandidatedetails`, candidateDetails);
  }

  public generateTestLink(candidateId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}generatetestlink?candidateId=${candidateId}`);
  }

  public getCandidateList() {
    return this.http.get<any>(`${this.baseUrl}getcandidatedetails`);
  }

  public getResultDetails(candidateId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}getcandidatefeedback?candidateId=${candidateId}`);
  }
}
