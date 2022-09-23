import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { RegistrationForm } from '../models/candidate';
=======
import { RegistrationForm } from '../modals/candidate';
>>>>>>> 1ce422272836cddab3a02ce43cc37176e8d90101

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
    // TODO: Use this for static response
    // const requestBody = {
    //   name: 'Sneha Devadiga',
    //   contactDetails: 9702005409,
    //   skill: 'Java Backend Engineer',
    //   'years of experience': 9,
    // };
    return this.http.post<any>(`${this.baseUrl}registercandidatedetails`, candidateDetails);
  }
}
