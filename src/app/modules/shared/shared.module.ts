import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [],
  imports: [CommonModule, BrowserModule],
})
export class SharedModule {}
