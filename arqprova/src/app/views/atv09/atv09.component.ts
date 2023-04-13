import { Component } from '@angular/core';

@Component({
  selector: 'app-atv09',
  templateUrl: './atv09.component.html',
  styleUrls: ['./atv09.component.css']
})
export class Atv09Component {

  classeCss: string='vermelho';

  mudarTexto(){
    this.classeCss = this.classeCss == 'vermelho' ? 'azul' : 'vermelho'
  }

}
