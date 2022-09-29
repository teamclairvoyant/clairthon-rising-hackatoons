import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateRegistrationService } from '../../../candidate-registration/services/candidate-registration.service';
import { AuthService } from '../../../shared/services/auth.service';
import { CandidateTestDetails } from '../../models/test-details';

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
   * Contains information related quiz and candidate
   */
  candidateTestDetails = {} as CandidateTestDetails;

  constructor(
    private route: ActivatedRoute,
    private candidateRegistrationSer: CandidateRegistrationService,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
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
          this.candidateTestDetails = JSON.parse(response.body);
          this.candidateTestDetails.testQuestions = this.candidateTestDetails.testQuestions.map(question => ({...question, candidateAnswer: ''})); 
        }
      },
      (_error) => {
        this.toastr.error('Something went wrong, Please try again!!');
      },
    );
  }

  public proceedToTest(): void {
    this.router.navigate(['/coding-test/quiz-test'], { state: { candidateTestDetails: this.candidateTestDetails } });
  }
}
