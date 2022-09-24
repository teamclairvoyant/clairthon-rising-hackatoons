import { Observable } from 'rxjs';

export class MockSocialAuthService {
  get authState() {
    return new Observable((subscriber: any) => {
      subscriber.next(null);
      subscriber.complete();
    });
  }

  get initState() {
    return new Observable((subscriber: any) => {
      subscriber.next(false);
      subscriber.complete();
    });
  }

  getAccessToken(providerId: string) {
    return Promise.resolve();
  }

  refreshAuthToken(providerId: string) {
    return Promise.resolve();
  }

  refreshAccessToken(providerId: string) {
    return Promise.resolve();
  }

  signIn(providerId: string, signInOptions?: any) {
    return Promise.resolve({});
  }

  signOut(revoke?: boolean) {
    return Promise.resolve();
  }
}
