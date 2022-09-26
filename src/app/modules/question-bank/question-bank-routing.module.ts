import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadQuestionsComponent } from './components/upload-questions/upload-questions.component';

const routes: Routes = [
  {
    path: 'upload-questions',
    component: UploadQuestionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, NgbModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class QuestionBankRoutingModule {}
