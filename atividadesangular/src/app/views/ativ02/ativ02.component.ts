import { Component } from '@angular/core';

@Component({
  selector: 'app-ativ02',
  templateUrl: './ativ02.component.html',
  styleUrls: ['./ativ02.component.css']
})
export class Ativ02Component {

  constructor(){}

  tratarClick():void {
    alert('Você quer trocar a imagem');
  }
 
}

