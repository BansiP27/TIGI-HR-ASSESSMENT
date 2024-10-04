// src/app/string-calculator.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringCalculatorService],
    });
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  it('should return the number itself when only one number is provided', () => {
    expect(service.add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add('1,5')).toBe(6);
  });

  it('should handle any amount of numbers', () => {
    expect(service.add('1,2,3,4,5')).toBe(15);
  });

  it('should handle new lines between numbers', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  it('should support different delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => service.add('1,-2,3')).toThrowError(
      'Negative numbers not allowed -2'
    );
  });

  it('should show all negative numbers in the exception message', () => {
    expect(() => service.add('1,-2,-3')).toThrowError(
      'Negative numbers not allowed -2,-3'
    );
  });
});
