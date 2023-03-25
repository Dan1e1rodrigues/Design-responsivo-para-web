import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplongif',
  templateUrl: './exemplongif.component.html',
  styleUrls: ['./exemplongif.component.css']
})
export class ExemplongifComponent {

  ativado = false;
  nome='';

  ligadoDesliga() {
    this.ativado = !this.ativado;
  }
}
