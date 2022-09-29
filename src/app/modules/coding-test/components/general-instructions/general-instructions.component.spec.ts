import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CandidateRegistrationService } from '../../../candidate-registration/services/candidate-registration.service';
import { AuthService } from '../../../shared/services/auth.service';
import { GeneralInstructionsComponent } from './general-instructions.component';

describe('GeneralInstructionsComponent', () => {
  let component: GeneralInstructionsComponent;
  let fixture: ComponentFixture<GeneralInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInstructionsComponent],
      imports: [RouterModule, RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService, CandidateRegistrationService, AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
