import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInstructionsComponent } from './general-instructions/general-instructions.component';

const routes: Routes = [
  {
    path: ':id',
    component: GeneralInstructionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodingTestRoutingModule {}
