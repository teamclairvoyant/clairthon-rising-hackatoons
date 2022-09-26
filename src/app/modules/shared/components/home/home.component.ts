import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isHrTeam$?: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isHrTeam$ = this.authService.hrTeam$;
  }
}
