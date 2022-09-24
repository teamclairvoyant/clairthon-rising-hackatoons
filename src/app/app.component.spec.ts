import { SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { MockSocialAuthService } from './modules/shared/services/mock/mock-social-auth.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SocialLoginModule],
      declarations: [AppComponent, HeaderComponent],
      providers: [{ provide: SocialAuthService, useClass: MockSocialAuthService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'clairthon'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('clairthon');
  });
});
