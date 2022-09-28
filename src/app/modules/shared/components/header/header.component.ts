import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { QuestionBankService } from 'src/app/modules/question-bank/services/question-bank.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHrTeam$?: BehaviorSubject<boolean>;
  username$?: BehaviorSubject<string | null>;

  constructor(
    private socialAuthService: SocialAuthService,
    public authService: AuthService,
    private router: Router,
    private questionBankService: QuestionBankService,
  ) {}

  ngOnInit(): void {
    this.isHrTeam$ = this.authService.hrTeam$;
    this.username$ = this.authService.username$;
  }

  async logout() {
    await this.socialAuthService.signOut();
    this.authService.username = null;
    this.router.navigate(['/login']);
  }

  downloadCsvFormat() {
    this.questionBankService.downloadCsvFormat();
  }
}
