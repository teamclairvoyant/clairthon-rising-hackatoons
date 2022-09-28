import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInstructionsComponent } from './general-instructions/general-instructions.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';

const routes: Routes = [
  {
    path: 'quiz-test',
    component: QuizTestComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: GeneralInstructionsComponent,
  },
  {
    path: 'quiz-test',
    component: QuizTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodingTestRoutingModule {}
