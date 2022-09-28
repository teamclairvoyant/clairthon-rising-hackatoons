import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizTestComponent } from './quiz-test.component';

describe('GeneralInstructionsModule', () => {
  let component: QuizTestComponent;
  let fixture: ComponentFixture<QuizTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});