import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
>>>>>>> 29ee740d648b5fa4a763e0ea3095ba713686ac1d
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  exports: [HeaderComponent],
  providers: [],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
})
export class SharedModule {}
