import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegistrationForm } from '../../modals/candidate';
import { CandidateRegistrationService } from '../../services/candidate-registration.service';

const candidate: RegistrationForm[] = [
  {
    id: '1',
    name: 'Aakansha',
    email: 'aakansha.choudhary@gmail.com',
    techSkills: [
      {
        id: 0,
        name: 'HTML',
      },
      {
        id: 1,
        name: 'CSS',
      },
    ],
    techExperience: '5-7yrs',
    openPosition: 'front End Developer',
    completionDate: 'null',
    result: 'null',
  },
  {
    id: '1',
    name: 'Aakansha',
    email: 'aakansha.choudhary@gmail.com',
    techSkills: [
      {
        id: 0,
        name: 'HTML',
      },
    ],
    techExperience: '5-7yrs',
    openPosition: 'front End Developer',
    completionDate: 'null',
    result: 'null',
  },
  {
    id: '1',
    name: 'Aakansha',
    email: 'aakansha.choudhary@gmail.com',
    techSkills: [
      {
        id: 0,
        name: 'HTML',
      },
    ],
    techExperience: '5-7yrs',
    openPosition: 'front End Developer',
    completionDate: 'null',
    result: 'null',
  },
  {
    id: '1',
    name: 'Aakansha',
    email: 'aakansha.choudhary@gmail.com',
    techSkills: [
      {
        id: 0,
        name: 'HTML',
      },
    ],
    techExperience: '5-7yrs',
    openPosition: 'front End Developer',
    completionDate: 'null',
    result: 'null',
  },
  {
    id: '1',
    name: 'Aakansha',
    email: 'aakansha.choudhary@gmail.com',
    techSkills: [
      {
        id: 0,
        name: 'HTML',
      },
    ],
    techExperience: '5-7yrs',
    openPosition: 'front End Developer',
    completionDate: 'null',
    result: 'null',
  },
  {
    id: '1',
    name: 'Aakansha',
    email: 'aakansha.choudhary@gmail.com',
    techSkills: [
      {
        id: 0,
        name: 'HTML',
      },
    ],
    techExperience: '5-7yrs',
    openPosition: 'front End Developer',
    completionDate: 'null',
    result: 'null',
  },
];

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit {

   candidateList : RegistrationForm[] = candidate

  constructor(
    private fb: FormBuilder,
    public candidateRegistrationService: CandidateRegistrationService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    
  }
}
