import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { RegistrationForm } from '../../models/candidate';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit {
  /**
   * List of Candidate
   */
  candidateList: RegistrationForm[] = [];

  /**
   * Pagination Setup
   */
  page = 1;
  pageSize = 10;
  collectionSize: number = 0;
  currentRate = 8;

  constructor(
    public candidateRegistrationService: CandidateRegistrationService,
    private loadingService: LoadingService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getCandidateList();
  }

  /**
   * Get List of all registered candidates
   */
  getCandidateList(): void {
    this.loadingService.show();
    this.candidateRegistrationService
      .getCandidateList()
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(
        (response) => {
          this.candidateList = JSON.parse(response.body);
          this.collectionSize = this.candidateList.length;
        },
        (_error) => {
          this.toastr.error('Something went wrong, Please try again!!');
        },
      );
  }

  generateTestLink(data: RegistrationForm) {
    // TODO to integrate service
    /* if (this.candidateId) {
      // TODO - replace localhost with actual site name
      this.testLink = `http://localhost:4200/coding-test/${this.candidateId}`;
    } */
  }
}
