import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  whileAlive$: Subject<void> = new Subject();

  constructor(private authservice: AuthService, private router: Router, private socialAuthService: SocialAuthService) {}

  ngOnInit(): void {
    this.socialAuthService.authState.pipe(takeUntil(this.whileAlive$)).subscribe((user) => {
      if (user) {
        this.authservice.authUser = user;
        this.authservice.username = user.email;
        const redirectUri = localStorage.getItem('redirectUri');
        this.router.navigateByUrl(redirectUri || '/');
      }
    });
  }

  login() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnDestroy() {
    this.whileAlive$.next();
    this.whileAlive$.complete();
  }
}
