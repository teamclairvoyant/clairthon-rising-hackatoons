import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';

/**
 * Interface model for candidate registration form
 */
export interface RegistrationForm {
  /**
   * Unique ID for candidate
   */
  id: string;
  /**
   * Candidate name
   */
  name: string;
  /**
   * Candidate email
   */
  email: string;
  /**
   * Candidate contact number
   */
  contactNumber: string;
  /**
   * Candidate technical skills
   */
  techSkills: { id: number; name: string }[];
  /**
   * Candidate technical experience
   */
  techExperience: string;
  /**
   * Open posistion for interview
   */
  openPosition?: string;
}

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
   * Generated test link
   */
  testLink = 'dummy_generated_test_link';
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

  constructor(private fb: FormBuilder, public candidateRegistrationService: CandidateRegistrationService) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  private createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      id: Math.random(),
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      contactNumber: this.fb.control(null, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      techSkills: this.fb.control([], [Validators.required]),
      techExperience: this.fb.control('', [Validators.required]),
      openPosition: this.fb.control(''),
    });
  }

  public submitRegistrationForm(registrationForm: FormGroup): void {
    console.log('form: ', registrationForm.value);
    this.candidateRegistrationService.addCandidateRegistration().subscribe((response: any) => {
      console.log('response', response);
    });
  }

  public generateTestLink(registrationForm: FormGroup): void {
    // TODO - add check here, if user directly clicks on generateTestLink button then first submit the form and then generate test
    this.submitRegistrationForm(registrationForm);
  }

  public copyTestLinkToClipboard(inputElement: any): void {
    // TODO - add copy to clipboard functionality
  }
}
