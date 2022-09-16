import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'general-instructions',
    loadChildren: () => import('./modules/coding-test/coding-test.module').then((m) => m.CodingTestModule),
  },
  {
    path: 'candidate-registration',
    loadChildren: () =>
      import('./modules/candidate-registration/candidate-registration.module').then(
        (m) => m.CandidateRegistrationModule,
      ),
  },
  {
    path: 'question-bank',
    loadChildren: () => import('./modules/question-bank/question-bank.module').then((m) => m.QuestionBankModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
