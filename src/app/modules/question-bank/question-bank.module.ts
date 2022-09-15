import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBankRoutingModule } from './question-bank-routing.module';
import { UploadQuestionsComponent } from './components/upload-questions/upload-questions.component';

@NgModule({
  declarations: [
    UploadQuestionsComponent
  ],
  imports: [CommonModule, QuestionBankRoutingModule],
})
export class QuestionBankModule {}
