import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
