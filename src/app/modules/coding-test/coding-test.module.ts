import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodingTestRoutingModule } from './coding-test-routing.module';
import { GeneralInstructionsComponent } from './general-instructions/general-instructions.component';

@NgModule({
  declarations: [GeneralInstructionsComponent],
  imports: [CommonModule, CodingTestRoutingModule],
})
export class CodingTestModule {}
