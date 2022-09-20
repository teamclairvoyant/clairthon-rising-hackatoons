import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralInstructionsModule } from './general-instructions.component';

describe('GeneralInstructionsModule', () => {
  let component: GeneralInstructionsModule;
  let fixture: ComponentFixture<GeneralInstructionsModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralInstructionsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralInstructionsModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
