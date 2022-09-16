import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  /**
   * Registration form to fill candidate information
   */
  registrationForm: FormGroup = {} as FormGroup;
  /**
   * Candidate's total years of technical experience
   */
  yearsOfExperience = [
    {
      id: '1-3',
      years: '1-3 yrs',
    },
    {
      id: '3-5',
      years: '3-5 yrs',
    },
    {
      id: '5-7',
      years: '5-7 yrs',
    },
    {
      id: '7+',
      years: '7+ yrs',
    },
  ];
  /**
   * Technical skills list for selection
   */
  skillsList: { id: number; name: string }[] = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'Bootstrap' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'JavaScript' },
    { id: 6, name: 'Python' },
    { id: 7, name: 'Scala' },
  ];
  /**
   * Ng-Multiselect dropdown default settings
   */
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: false,
  };

  constructor(private fb: FormBuilder, public cd: CandidateRegistrationService) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  private createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      contactNumber: this.fb.control('', [Validators.required]),
      techSkills: this.fb.control([], [Validators.required]),
      techExperience: this.fb.control('', [Validators.required]),
      openPosition: this.fb.control(''),
    });
  }

  public submitRegistrationForm(registrationForm: FormGroup): void {
    console.log('form: ', registrationForm.value);
    this.cd.addCandidateRegistration().subscribe((response: any) => {
      console.log('response', response);
    });
  }

  public generateTestLink(registrationForm: FormGroup): void {
    // TODO - add check here, if user directly clicks on generateTestLink button then first submit the form and then generate test
    this.submitRegistrationForm(registrationForm);
  }
}
