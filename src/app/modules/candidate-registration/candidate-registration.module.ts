import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateRegistrationRoutingModule } from './candidate-registration-routing.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RegistrationFormComponent,CandidateListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    CandidateRegistrationRoutingModule,
  ],
  exports: [CommonModule],
})
export class CandidateRegistrationModule {}
