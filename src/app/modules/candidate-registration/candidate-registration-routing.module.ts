import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFormComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'candidate-list',
    component: CandidateListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'result/:candidateId',
    component: ResultComponent,
  },
  {
    path: 'edit',
    component: RegistrationFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRegistrationRoutingModule {}
