import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { QuestionBankService } from '../../services/question-bank.service';
import { DownloadQuestionsComponent } from './download-questions.component';

describe('DownloadQuestionsComponent', () => {
  let component: DownloadQuestionsComponent;
  let fixture: ComponentFixture<DownloadQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadQuestionsComponent],
      imports: [NgMultiSelectDropDownModule.forRoot(), FormsModule, ReactiveFormsModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [FormBuilder, QuestionBankService, ToastrService],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
