import { SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { LoaderComponent } from './modules/shared/components/loader/loader.component';
import { MockSocialAuthService } from './modules/shared/services/mock/mock-social-auth.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SocialLoginModule, HttpClientTestingModule],
      declarations: [AppComponent, HeaderComponent, LoaderComponent],
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
