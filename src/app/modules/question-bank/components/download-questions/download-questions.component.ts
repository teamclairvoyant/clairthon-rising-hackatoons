import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionBankService } from '../../services/question-bank.service';
import { utils } from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-questions',
  templateUrl: './download-questions.component.html',
  styleUrls: ['./download-questions.component.scss'],
})
export class DownloadQuestionsComponent implements OnInit {
  /**
   * downloadForm to download the required set of questions
   */
  downloadForm: FormGroup = {} as FormGroup;
  /**
   * Technical Questions Level for selection
   */
  levels: { id: string; name: string }[] = [
    { id: 'hard', name: 'Hard' },
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
  ];
  /**
   * Technical skills list for selection
   */
  skillsList: { id: string; name: string }[] = [
    { id: 'html', name: 'HTML' },
    { id: 'css', name: 'CSS' },
    { id: 'boostrap', name: 'Bootstrap' },
    { id: 'java', name: 'Java' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'scala', name: 'Scala' },
    { id: 'angular', name: 'Angular' },
    { id: 'azure', name: 'Azure' },
  ];

  constructor(private fb: FormBuilder, private questionBankService: QuestionBankService) {}

  ngOnInit() {
    this.createDownloadForm();
  }

  createDownloadForm() {
    this.downloadForm = this.fb.group({
      skill: this.fb.control('', [Validators.required]),
      noOfQuestions: this.fb.control('', [Validators.required]),
      levelOfDifficulty: this.fb.control('', [Validators.required]),
    });
  }

  /**
   * Utility method to download questions
   */
  public downloadQuestions(): any {
    const { skill, levelOfDifficulty } = this.downloadForm.value;
    this.questionBankService.downloadQuestions(this.downloadForm.value).subscribe((response) => {
      console.log('response', response);
      const rawData = response.map(([Question, Answer]: string[]) => ({ Question, Answer }));
      const worksheet = utils.json_to_sheet(rawData);
      /* generate CSV */
      const csv = utils.sheet_to_csv(worksheet);
      /* CSV -> Uint8Array -> Blob */
      const u8 = new TextEncoder().encode(csv);
      const blob = new Blob([u8], { type: 'text/csv' });
      /* Saves the file  */
      saveAs(blob, `${skill}-${levelOfDifficulty}-question-bank.csv`);
    });
  }
}
