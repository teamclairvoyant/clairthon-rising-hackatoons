import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //TODO: Create API for fetching admins & fetch HR team user name from API
  private hrTeam = [
    'shubhangi.deshpande@clairvoyantsoft.com',
    'yashi.songara@clairvoyantsoft.com',
    'sudesh.patil@clairvoyantsoft.com',
    'sneha.devadiga@clairvoyantsoft.com',
    'aakansha.choudhary@clairvoyantsoft.com',
    // committee
    'akash.bhandwalkar@clairvoyantsoft.com',
    'rodrigo.rodriguez@clairvoyantsoft.com',
    'quang.le@clairvoyantsoft.com',
    'kaustubh.eksambekar@clairvoyantsoft.com',
    'meet.shah@clairvoyantsoft.com',
    'sobhan.paul@clairvoyantsoft.com',
    'andy.nguyen@clairvoyantsoft.com',
  ];
  public authUser?: SocialUser;
  public username$: BehaviorSubject<string | null> = new BehaviorSubject(this.username);
  public hrTeam$: BehaviorSubject<boolean> = new BehaviorSubject(this.isHRTeam());
  public hideHeader = false;

  public readonly usernameKey = 'leetquestpool-uname';

  set username(email: string | null) {
    localStorage.setItem(this.usernameKey, JSON.stringify(email));
    this.username$.next(email);
    this.hrTeam$.next(this.isHRTeam());
  }

  get username() {
    return JSON.parse(localStorage.getItem(this.usernameKey) as string);
  }

  /**
   * Method to validate if user is Admin user or not.
   * @returns
   */
  isHRTeam(): boolean {
    if (!this.username) {
      return false;
    }
    return this.hrTeam.includes(this.username);
  }
}
