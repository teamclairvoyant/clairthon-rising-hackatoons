import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        NgMultiSelectDropDownModule,
      ],
      providers: [ToastrService, CandidateRegistrationService],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create registration form', () => {
    expect(component.registrationForm.controls['id']).toBeTruthy();
    expect(component.registrationForm.controls['name']).toBeTruthy();
    expect(component.registrationForm.controls['email']).toBeTruthy();
    expect(component.registrationForm.controls['contactNumber']).toBeTruthy();
    expect(component.registrationForm.controls['techSkills']).toBeTruthy();
    expect(component.registrationForm.controls['techExperience']).toBeTruthy();
    expect(component.registrationForm.controls['openPosition']).toBeTruthy();
  });
});
