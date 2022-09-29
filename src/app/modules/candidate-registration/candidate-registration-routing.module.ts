import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'candidate-list',
    component: CandidateListComponent,
  },
  {
    path: 'result/:candidateId',
    component: ResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRegistrationRoutingModule {}
