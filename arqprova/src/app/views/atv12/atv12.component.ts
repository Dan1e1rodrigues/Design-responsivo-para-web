import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-atv12',
  templateUrl: './atv12.component.html',
  styleUrls: ['./atv12.component.css']
})
export class Atv12Component {

  num1: number = 0;
  num2: number = 0;

  somar(num1: number, num2: number){
    return(num1 + num2)
  }
}
