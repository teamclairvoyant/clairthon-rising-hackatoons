import { Component } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { AuthService } from './modules/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clairthon';

  constructor(private authService: AuthService, private socialAuthService: SocialAuthService) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => (this.authService.username = (user && user.email) || null));
  }
}
