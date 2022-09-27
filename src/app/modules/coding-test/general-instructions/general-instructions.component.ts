import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateRegistrationService } from '../../candidate-registration/services/candidate-registration.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-general-instructions',
  templateUrl: './general-instructions.component.html',
  styleUrls: ['./general-instructions.component.scss'],
})
export class GeneralInstructionsComponent implements OnInit {
  /**
   * Candidate id to fetch test details
   */
  candidateId = '';

  constructor(
    private route: ActivatedRoute,
    private candidateRegistrationSer: CandidateRegistrationService,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.candidateId = params['id'] as string;
      this.authService.hideHeader = true;
      this.getCodingTest();
    });
  }

  private getCodingTest(): void {
    this.candidateRegistrationSer.generateTestLink(this.candidateId).subscribe(
      (response: any) => {
        if (response?.statusCode) {
          console.log('response: ', JSON.parse(response.body));
        }
      },
      (_error) => {
        this.toastr.error('Something went wrong, Please try again!!');
      },
    );
  }
}
