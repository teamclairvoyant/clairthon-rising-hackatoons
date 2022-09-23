import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { QuestionBankService } from '../../services/question-bank.service';
import { UploadQuestionsComponent } from './upload-questions.component';

describe('UploadQuestionsComponent', () => {
  let component: UploadQuestionsComponent;
  let fixture: ComponentFixture<UploadQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadQuestionsComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [FormBuilder, QuestionBankService, ToastrService],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
