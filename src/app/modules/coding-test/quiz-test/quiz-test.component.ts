import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.scss'],
})
export class QuizTestComponent {
  // TODO remove this once data being passed by state
  questionsList = [
    {
      option1: 'Programming Language',
      option2: 'Coffee Bean',
      option3: 'Place',
      option4: 'None of these',
      question: 'What is JAVA',
      questionId: 'rgdgdg',
    },
    { option1: 'a', option2: 'b', option3: 'c', option4: 'd', question: 'Explain Polymorphism', questionId: 'dfsf' },
  ];
  /**
   * quizTest form to fill candidate information
   */
  quizTest: FormGroup = {} as FormGroup;
  /**
   * Displays the timer
   */
  timerCount: any;

  ngOnInit() {
    // Timer calculations
    this.timer(60);
  }

  /**
   * Count down timer
   * @param minute : Set up default time
   */
  timer(minute: number): void {
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

  submitOnlineTest() {
    // TODO to intergrate API and Logic
  }
}
