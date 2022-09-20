import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInstructionsModule } from './general-instructions/general-instructions.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralInstructionsModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodingTestRoutingModule {}
