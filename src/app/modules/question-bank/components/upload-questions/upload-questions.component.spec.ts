import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadQuestionsComponent } from './upload-questions.component';

describe('UploadQuestionsComponent', () => {
  let component: UploadQuestionsComponent;
  let fixture: ComponentFixture<UploadQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadQuestionsComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form on ngOnInit', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.uploadQuestionForm).toBeTruthy();
  });
});
