import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { CodingTestService } from '../../services/coding-test.service';
import { QuizTestComponent } from './quiz-test.component';

describe('QuizTestComponent', () => {
  let component: QuizTestComponent;
  let fixture: ComponentFixture<QuizTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizTestComponent],
      imports: [RouterModule, RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService, CodingTestService, AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
