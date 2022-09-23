import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isHrTeam$?: BehaviorSubject<boolean>;
  username$?: BehaviorSubject<string | null>;

  constructor(private socialAuthService: SocialAuthService, public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isHrTeam$ = this.authService.hrTeam$;
    this.username$ = this.authService.username$;
  }

  async logout() {
    await this.socialAuthService.signOut();
    this.authService.username = null;
    this.router.navigate(['/login']);
  }
}
