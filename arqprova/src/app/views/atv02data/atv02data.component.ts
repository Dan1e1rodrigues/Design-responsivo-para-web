import { Component } from '@angular/core';

@Component({
  selector: 'app-atv02data',
  templateUrl: './atv02data.component.html',
  styleUrls: ['./atv02data.component.css']
})
export class Atv02dataComponent {

  // Funçaõ de data
  dataAtual: Date = new Date ();

  constructor(){}

  // Chamando a função e nomeandoá
  ngOnInit(): void {
    this.dataAtual = new Date();
  }
}
