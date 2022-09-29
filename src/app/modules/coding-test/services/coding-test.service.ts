import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateTestDetails } from '../models/test-details';

@Injectable({
  providedIn: 'root',
})
export class CodingTestService {
  /**
   * Base url endpoint to hit the backend apis
   */
  private baseurl = 'https://jzoznlcnii.execute-api.ap-south-1.amazonaws.com/dev/';

  /**
   * Constructor for CandidateRegistrationService
   * @param http an instance of {@link HttpClient} to make HTTP requests
   */
  constructor(private http: HttpClient) {}

  public submitTest(candidateTestDetails: CandidateTestDetails): Observable<any> {
    return this.http.post<any>(`${this.baseurl}submittest`, candidateTestDetails);
  }
}
