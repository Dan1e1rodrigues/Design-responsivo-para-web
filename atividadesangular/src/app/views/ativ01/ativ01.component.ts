import { Component } from '@angular/core';

@Component({
  selector: 'app-ativ01',
  templateUrl: './ativ01.component.html',
  styleUrls: ['./ativ01.component.css']
})
export class Ativ01Component {

  // Criando os atributos de imagem colocando o caminho das imagens para assim serem chamadas no HTML.
  luffy = 'assets/luffy.jpg';

  zoro = 'assets/zoro.jpg';

  sanji = 'assets/sanji.jpg';

// ----------------------------------------------------------------------------------------

//  Feito isso chamo meu class que criei no HTML e nomeio ele para editar o style

  styleluffy = 'luffy';

  stylezoro = 'zoro';

  stylesanji = 'sanji';
  
  constructor(){

  }

}
