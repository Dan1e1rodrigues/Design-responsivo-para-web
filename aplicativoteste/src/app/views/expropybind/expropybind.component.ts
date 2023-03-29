import { Component } from '@angular/core';

@Component({
  selector: 'app-expropybind',
  templateUrl: './expropybind.component.html',
  styleUrls: ['./expropybind.component.css']
})
export class ExpropybindComponent {

  constructor(){

  }

  disableInput = false;

  tratarClick():void {
    this.disableInput = !this.disableInput;
  }
}
