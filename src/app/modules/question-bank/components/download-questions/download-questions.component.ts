import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  csvFileData = [
    ['Alan Walker', 'Singer'],
    ['Cristiano Ronaldo', 'Footballer'],
    ['Saina Nehwal', 'Badminton Player'],
    ['Arijit Singh', 'Singer'],
    ['Terence Lewis', 'Dancer'],
  ];

  /**
   * Technical Questions Level for selection
   */
  levels: { id: number; name: string }[] = [
    { id: 1, name: 'Hard' },
    { id: 2, name: 'Easy' },
    { id: 3, name: 'Medium' },
  ];

  /**
   * Ng-Multiselect dropdown default settings
   */
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: false,
  };

  /**
   * Candidate's total years of technical experience
   */
  yearsOfExperience = [
    {
      id: '1-3',
      years: '1-3 yrs',
    },
    {
      id: '3-5',
      years: '3-5 yrs',
    },
    {
      id: '5-7',
      years: '5-7 yrs',
    },
    {
      id: '7+',
      years: '7+ yrs',
    },
  ];
  /**
   * Technical skills list for selection
   */
  skillsList: { id: number; name: string }[] = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'Bootstrap' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'JavaScript' },
    { id: 6, name: 'Python' },
    { id: 7, name: 'Scala' },
    { id: 7, name: 'Angular' },
    { id: 8, name: 'Azure' },
  ];

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.createDownloadForm();
  }

  createDownloadForm() {
    this.downloadForm = this.fb.group({
      techSkills: this.fb.control([], [Validators.required]),
      techExperience: this.fb.control('', [Validators.required]),
      questionsCount: this.fb.control('', [Validators.required]),
      level: this.fb.control([]),
    });
  } 
}
