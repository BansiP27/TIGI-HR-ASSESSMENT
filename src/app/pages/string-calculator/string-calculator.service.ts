// src/app/string-calculator.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  add(stringOfNumbers: string): any {
    //If input string is empty, then return 0
    if (!stringOfNumbers) return 0;

    //Setting default delimiter as ","
    let delimiter = ',';

    //Check if string of numbers starts with "//" and has a delimiter
    if (stringOfNumbers.startsWith('//')) {
      const parts = stringOfNumbers.split(/\\n|\n/);
      delimiter = parts[0].slice(2, 3);
      stringOfNumbers = parts[1].split(delimiter).join(',');
    }

    //Replace "\n" with "," to convert it into comma separated numbers
    stringOfNumbers = stringOfNumbers.replace(/\\n|\n/g, ',');

    const numArray = stringOfNumbers.split(',').map((num) => parseInt(num, 10)),
      negatives = numArray.filter((num) => num < 0);

    //Check whether there is/are any negative number in the string
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed ${negatives.join(',')}`);
    }

    //Returning the summation of numbers
    return numArray.reduce((a, b) => a + b, 0);
  }
}
