import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public candidateRegistrationService: CandidateRegistrationService) {}

  ngOnInit(): void {
    this.getCandidateList();
  }

  /**
   * Get List of all registered candidates
   */
  getCandidateList(): void {
    this.candidateRegistrationService.getCandidateList().subscribe((response) => {
      this.candidateList = JSON.parse(response.body);
      this.collectionSize = this.candidateList.length;
    });
  }

  generateTestLink(data: RegistrationForm) {
    // TODO to integrate service
    /* if (this.candidateId) {
      // TODO - replace localhost with actual site name
      this.testLink = `http://localhost:4200/coding-test/${this.candidateId}`;
    } */
  }
}
