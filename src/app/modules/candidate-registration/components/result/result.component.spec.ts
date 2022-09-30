import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let candidateRegistrationService: CandidateRegistrationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ candidateId: 'fcf0d30040a511ed8626969e586a5ee0' }),
            snapshot: {},
            queryParams: {
              subscribe() {
                return of({});
              },
            },
          },
        },
        CandidateRegistrationService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
