import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';
import { CandidateListComponent } from './candidate-list.component';

describe('CandidateListComponent', () => {
  let component: CandidateListComponent;
  let fixture: ComponentFixture<CandidateListComponent>;
  let candidateRegistrationService: CandidateRegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateListComponent],
      imports: [
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        NgMultiSelectDropDownModule,
      ],
      providers: [ToastrService, CandidateRegistrationService],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    candidateRegistrationService = TestBed.inject(CandidateRegistrationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('gets candidate list data ', () => {
    const candidateRegistrationServiceSpy = spyOn(
      component['candidateRegistrationService'],
      'getCandidateList',
    ).and.callThrough();
    candidateRegistrationService.getCandidateList().subscribe((response) => {
      expect(response).toBeTruthy();
    });
    fixture.detectChanges();
    expect(candidateRegistrationServiceSpy).toHaveBeenCalled();
  });
});
