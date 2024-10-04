// src/app/string-calculator/string-calculator.component.ts
import { Component } from '@angular/core';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.scss'],
})
export class StringCalculatorComponent {
  numericStringValue: string = '';
  result: number | string = 0;

  constructor(private stringCalculatorService: StringCalculatorService) {}

  calculate() {
    try {
      this.result = this.stringCalculatorService.add(this.numericStringValue);
    } catch (error: any) {
      this.result = error.message;
    }
  }
}
