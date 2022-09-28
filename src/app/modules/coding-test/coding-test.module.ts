import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodingTestRoutingModule } from './coding-test-routing.module';
import { GeneralInstructionsComponent } from './general-instructions/general-instructions.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GeneralInstructionsComponent,QuizTestComponent],
        imports: [CommonModule, CodingTestRoutingModule,FormsModule,ReactiveFormsModule],
})
export class CodingTestModule {}
