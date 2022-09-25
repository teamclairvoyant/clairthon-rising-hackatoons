import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class QuestionBankService {
  /**
   * Base url endpoint to hit the backend apis
   */
  private baseurl = 'https://jzoznlcnii.execute-api.ap-south-1.amazonaws.com/dev/';
  /**
   * Constructor for CandidateRegistrationService
   * @param http an instance of {@link HttpClient} to make HTTP requests
   */
  constructor(private http: HttpClient) {}

  public uploadQuestions(file: File): Observable<any> {
    const headers = new HttpHeaders().append('Content-Type', 'text/csv');
    return this.http.put<any>(`${this.baseurl}uploadquestions/leetquestpool-questionbank-upload/${file?.name}`, file, {
      headers,
    });
  }

  public downloadCsvFormat(): void {
    this.http.get('/assets/templates/format.csv', { responseType: 'blob' }).subscribe((blob) => {
      saveAs(blob, 'question-template.csv');
    });
  }

  public downloadQuestions(questionsCriteria: any): Observable<any> {
    // TODO remove this static body and add type for request body
    const requestBody = {
      skill: 'java',
      levelOfDifficulty: 'hard',
      noOfQuestions: 1,
    };
    return this.http.post<any>(`${this.baseurl}downloadquestions`, requestBody);
  }
}
