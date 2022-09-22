import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionBankService {
  /**
   * Base url to hit the backend api
   */
  private baseUrl =
    'https://jzoznlcnii.execute-api.ap-south-1.amazonaws.com/dev/uploadquestions/leetquestpool-questionbank-upload';
  /**
   * Constructor for CandidateRegistrationService
   * @param http an instance of {@link HttpClient} to make HTTP requests
   */
  constructor(private http: HttpClient) {}

  public uploadQuestions(file: File): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'text/csv');
    return this.http.put<any>(`${this.baseUrl}/${file?.name}`, file, {
      headers,
    });
  }
}
