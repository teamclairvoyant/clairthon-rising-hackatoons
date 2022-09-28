import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, LoginComponent, LoaderComponent],
  exports: [HeaderComponent, LoaderComponent],
  providers: [],
  imports: [CommonModule, BrowserModule, AppRoutingModule, NgbModule, SocialLoginModule],
})
export class SharedModule {}
