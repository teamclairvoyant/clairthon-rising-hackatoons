import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBankRoutingModule } from './question-bank-routing.module';
import { UploadQuestionsComponent } from './components/upload-questions/upload-questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadQuestionsComponent],
  imports: [CommonModule, QuestionBankRoutingModule, FormsModule, ReactiveFormsModule],
})
export class QuestionBankModule {}
