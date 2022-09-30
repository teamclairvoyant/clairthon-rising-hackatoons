import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { CandidateTestDetails } from '../../models/test-details';
import { CodingTestService } from '../../services/coding-test.service';

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.scss'],
})
export class QuizTestComponent implements OnInit, OnDestroy {
  /**
   * Contains information related quiz and candidate
   */
  candidateTestDetails = {} as CandidateTestDetails;
  /**
   * Displays the timer
   */
  timerCount: any;
  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private codingTestService: CodingTestService,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.authService.hideHeader = true;

    // Timer calculations
    this.timer(60);

    const details = (window?.history?.state && window?.history?.state['candidateTestDetails']) || {};
    if (Object.keys(details).length !== 0) {
      this.candidateTestDetails = details;
    }
  }

  /**
   * Count down timer
   * @param minute : Set up default time
   */
  private timer(minute: number): void {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec = 60;

    const prefix = minute < 10 ? '0' : '';

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.timerCount = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(timer);
      }
    }, 1000);
  }

  public onOptionClick(selectedAnswer: string, questionIndex: number): void {
    this.candidateTestDetails.testQuestions[questionIndex].candidateAnswer = selectedAnswer;
  }

  public submitTest(): void {
    this.candidateTestDetails.testTaken = true;
    this.codingTestService.submitTest(this.candidateTestDetails).subscribe(
      (response: any) => {
        if (response?.statusCode) {
          this.toastr.success('Text Submitted Successfully');
          this.router.navigate(['/success']);
        }
      },
      (_error) => {
        this.toastr.error('Something went wrong, Please try again!!');
      },
    );
  }
}
