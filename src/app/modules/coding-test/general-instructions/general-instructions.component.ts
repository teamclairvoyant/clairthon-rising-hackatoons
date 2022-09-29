import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { CandidateRegistrationService } from '../../candidate-registration/services/candidate-registration.service';
import { AuthService } from '../../shared/services/auth.service';
import { LoadingService } from '../../shared/services/loading.service';

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
  /**
   * Candidate details
   */
  candidateDetails: any;

  constructor(
    private route: ActivatedRoute,
    private candidateRegistrationSer: CandidateRegistrationService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.candidateId = params['id'] as string;
      this.authService.hideHeader = true;
      this.getCodingTest();
    });
  }

  private getCodingTest(): void {
    this.loadingService.show();
    this.candidateRegistrationSer
      .generateTestLink(this.candidateId)
      .pipe(
        finalize(() => {
          this.loadingService.hide();
        }),
      )
      .subscribe(
        (response: any) => {
          if (response?.statusCode) {
            this.candidateDetails = JSON.parse(response.body);
          }
        },
        (_error) => {
          this.toastr.error('Something went wrong, Please try again!!');
        },
      );
  }

  proceedToTest() {
    // TODO to pass the testQuestions data to quiz component
    this.router.navigate(['/coding-test/quiz-test']);
  }
}
