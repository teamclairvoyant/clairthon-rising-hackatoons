import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  /**
   * Hold the details for candidate
   */
  candidateDetails: any;
  /**
   * Holds the value for candidate Id
   */
  candidateId?: string;

  constructor(
    private candidateRegistrationService: CandidateRegistrationService,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.candidateId = params['candidateId'];
    });
  }

  ngOnInit(): void {
    this.loadingService.show();
    this.candidateRegistrationService
      .getResultDetails(this.candidateId as string)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe((response) => {
        this.candidateDetails = JSON.parse(response.body);
      });
  }
}
