import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodingTestRoutingModule } from './coding-test-routing.module';
import { GeneralInstructionsModule } from './general-instructions/general-instructions.component';
@NgModule({
  declarations: [GeneralInstructionsModule],
  imports: [CommonModule, CodingTestRoutingModule],
})
export class CodingTestModule {}
