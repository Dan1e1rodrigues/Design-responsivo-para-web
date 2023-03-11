import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit{

  //essa função faz com que seja possivel visualizar a data
  dataAtual: Date = new Date();

  // Cria a variavel
  constructor() { }

  // Chama a variavel
  ngOnInit(): void {
    this.dataAtual = new Date();
  }

}
