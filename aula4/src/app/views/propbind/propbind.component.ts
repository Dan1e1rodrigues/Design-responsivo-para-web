import { Component } from '@angular/core';

@Component({
  selector: 'app-propbind',
  templateUrl: './propbind.component.html',
  styleUrls: ['./propbind.component.css']
})
export class PropbindComponent {
  pais = 'alemanha';

  // pais2 = 'brasil';

  trocarPais(pais: string) {
    this.pais = pais;
  }
  
}

