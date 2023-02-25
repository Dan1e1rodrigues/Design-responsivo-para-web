import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //propriedade (variavel global)
  nome = 'Desculpa familia eu não conseguiu lidar com isso';

  semestre = '3° Semestre'

  imagem= 'assets/manga.jpg';

  somar(valor1: number, valor2: number) {
    return valor1 + valor2;
  }
}
