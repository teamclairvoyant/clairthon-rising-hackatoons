import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DownloadQuestionsComponent } from './components/download-questions/download-questions.component';
import { UploadQuestionsComponent } from './components/upload-questions/upload-questions.component';

const routes: Routes = [
  {
    path: '',
    component: UploadQuestionsComponent,
  },
  {
    path: 'download-questions',
    component: DownloadQuestionsComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, NgbModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class QuestionBankRoutingModule {}
