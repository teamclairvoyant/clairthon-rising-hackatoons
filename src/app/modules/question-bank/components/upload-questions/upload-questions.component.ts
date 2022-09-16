import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DifficultyLevel } from '../../models/question-bank';

@Component({
  selector: 'app-upload-questions',
  templateUrl: './upload-questions.component.html',
  styleUrls: ['./upload-questions.component.scss'],
})
export class UploadQuestionsComponent implements OnInit {
  /**
   * Form group for upload question
   */
  uploadQuestionForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createUploadQuestionForm();
  }

  public createUploadQuestionForm(): void {
    this.uploadQuestionForm = this.fb.group({
      question: this.fb.control(''),
      technology: this.fb.control('', [Validators.required]),
      experience: this.fb.control('', [Validators.required]),
      difficultyLevel: this.fb.control(DifficultyLevel.Beginner, [Validators.required]),
      questionCategory: this.fb.control('', [Validators.required]),
      options: this.fb.control(''),
      correctAnswer: this.fb.control(''),
    });
  }

  public addQuestions() {
    this.uploadQuestionForm.value;
    console.log('this.uploadQuestionForm.value', this.uploadQuestionForm.value);
  }
}
