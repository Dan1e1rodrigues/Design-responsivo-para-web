import { Component } from '@angular/core';

@Component({
  selector: 'app-atv10',
  templateUrl: './atv10.component.html',
  styleUrls: ['./atv10.component.css']
})
export class Atv10Component {

  caminhoImagem: string = '';

  mudarImagem(piece: string){
    this.caminhoImagem = 'assets/' + piece + '.jpg';
  }

}
