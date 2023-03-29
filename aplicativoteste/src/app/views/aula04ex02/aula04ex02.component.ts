import { Component } from '@angular/core';

@Component({
  selector: 'app-aula04ex02',
  templateUrl: './aula04ex02.component.html',
  styleUrls: ['./aula04ex02.component.css']
})
export class Aula04ex02Component {

  constructor(){

  }

  disableInput = 'assets/dofi.jpg';

  tratarClick():void {
    this.disableInput = this.disableInput;
  }
}
