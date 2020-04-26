import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  calcNumber: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  value = '';
  private prevValue = '';
  private curValue = '';
  result = '';

  constructor() { }


  checkVal(value: string) {
    if (this.result !== '') {
      this.prevValue = this.curValue;
      this.curValue = value;
    }
    console.log(this.result);
    if (value === 'AC') {
      this.result = '';
    } else if (value === '=') {
      // tslint:disable-next-line:no-eval
      this.result = eval(this.result);
    } else {
      this.result += value;
    }
  }
}
