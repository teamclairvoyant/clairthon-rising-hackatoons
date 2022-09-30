import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { LoginComponent } from './modules/shared/components/login/login.component';
import { SuccessComponent } from './modules/shared/components/success/success.component';
import { AuthGuard } from './modules/shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'coding-test',
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
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
