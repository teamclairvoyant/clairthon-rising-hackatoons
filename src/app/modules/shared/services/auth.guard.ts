import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private socialAuthService: SocialAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.socialAuthService.authState.pipe(
      map((user) => {
        if (user) {
          return true;
        }
        const requestedRoute = route.url.toString();
        localStorage.setItem('redirectUri', requestedRoute);
        this.router.navigate(['./login']);
        return true;
      }),
    );
  }
}
