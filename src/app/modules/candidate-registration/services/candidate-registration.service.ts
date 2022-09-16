import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationForm } from '../registration-form/registration-form.component';

@Injectable({
  providedIn: 'root',
})
export class CandidateRegistrationService {
  constructor(private http: HttpClient) {}

  public registarCandidate(candidateDetails: RegistrationForm) {
    return this.http.post<any>(`https://2u1ovpnld0.execute-api.ap-south-1.amazonaws.com/dev`, candidateDetails);
  }
}
