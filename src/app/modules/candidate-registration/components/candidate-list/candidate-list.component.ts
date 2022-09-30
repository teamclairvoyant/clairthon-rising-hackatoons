import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
   * Generated test link
   */
  testLink = '';
  /**
   * Boolean to check whether test link is copied to clipboard or not
   */
  isTestLinkCopied = false;
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
    private router: Router,
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
    console.log(data);
    if (data.id) {
      // TODO - replace localhost with actual site name
      this.testLink = `http://localhost:4200/coding-test/${data.id}`;
    }
  }

  public copyTestLinkToClipboard(inputElement: any): void {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.isTestLinkCopied = !this.isTestLinkCopied;
    setTimeout(() => {
      this.isTestLinkCopied = !this.isTestLinkCopied;
    }, 5000);
  }

  /**
   * Edit the candidate details
   * @param details candidateDetails on which edit is clicked
   */
  editCandidateDetails(details: RegistrationForm) {
    this.router.navigate(['./candidate-registration/edit'], { state: { candidateDetails: details } });
  }
}
