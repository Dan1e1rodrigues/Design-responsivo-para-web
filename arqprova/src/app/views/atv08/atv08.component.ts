import { Component } from '@angular/core';

@Component({
  selector: 'app-atv08',
  templateUrl: './atv08.component.html',
  styleUrls: ['./atv08.component.css']
})
export class Atv08Component {

  music: string = 'Caneta Azul';

  nome: string = 'Caneta Azul azul caneta';

  interprte: string = 'Manoel Gomes';

  // valor1= 3;

  // valor2= 5;

  // somar(valor1:number, valor2:number){
  //   return valor1 + valor2;
  // }

  v1 = 3

  v2 = 4

  somar(v1:number,v2:number){
    return(v1+v2)
  }

}
