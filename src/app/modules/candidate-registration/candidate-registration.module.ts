import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateRegistrationRoutingModule } from './candidate-registration-routing.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CandidateRegistrationRoutingModule,
    HttpClientModule,
  ],
  exports: [CommonModule],
})
export class CandidateRegistrationModule {}
