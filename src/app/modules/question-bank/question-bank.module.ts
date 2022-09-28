import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBankRoutingModule } from './question-bank-routing.module';
import { UploadQuestionsComponent } from './components/upload-questions/upload-questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { DownloadQuestionsComponent } from './components/download-questions/download-questions.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [UploadQuestionsComponent, DownloadQuestionsComponent],
  imports: [
    CommonModule,
    QuestionBankRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,
  ],
})
export class QuestionBankModule {}
