// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StringCalculatorComponent } from './pages/string-calculator/string-calculator.component';

@NgModule({
  declarations: [AppComponent, StringCalculatorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
