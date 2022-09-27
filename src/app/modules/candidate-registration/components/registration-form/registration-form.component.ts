import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
   * Generated test link
   */
  testLink = '';
  /**
   * Boolean to check whether test link is copied to clipboard or not
   */
  isTestLinkCopied = false;
  /**
   * Candidate Id
   */
  candidateId = '';
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
    { id: 8, name: 'Angular' },
    { id: 9, name: 'Azure' },
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

  constructor(
    private fb: FormBuilder,
    public candidateRegistrationService: CandidateRegistrationService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  private createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      id: null,
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      contactNumber: this.fb.control(null, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      techSkills: this.fb.control([], [Validators.required]),
      techExperience: this.fb.control('', [Validators.required]),
      openPosition: this.fb.control(''),
    });
  }

  public submitRegistrationForm(): void {
    this.candidateRegistrationService.addCandidateRegistration(this.registrationForm.value).subscribe(
      (response: any) => {
        if (response?.statusCode) {
          this.candidateId = JSON.parse(response.body);
          this.toastr.success('Candidate Information Saved Successfully');
          // this.registrationForm.reset();
          // this.router.navigate(['./candidate-registration/candidateList']);
        }
      },
      (_error) => {
        this.toastr.error('Something went wrong, Please try again!!');
      },
    );
  }

  public generateTestLink(): void {
    if (this.candidateId) {
      // TODO - replace localhost with actual site name
      this.testLink = `http://localhost:4200/#/coding-test/${this.candidateId}`;
    }
  }

  public copyTestLinkToClipboard(inputElement: any): void {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.isTestLinkCopied = !this.isTestLinkCopied;
    setTimeout(() => {
      this.isTestLinkCopied = !this.isTestLinkCopied;
    }, 5000);
  }
}
