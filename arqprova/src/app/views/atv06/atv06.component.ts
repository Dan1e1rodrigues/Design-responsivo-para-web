import { Component } from '@angular/core';

@Component({
  selector: 'app-atv06',
  templateUrl: './atv06.component.html',
  styleUrls: ['./atv06.component.css']
})
export class Atv06Component {

  imageUrl = 'assets/nami.jpg';
  isImage1 = true;

  toggleImage() {
    // Importante para definir se e true ou false, no caso true a imagem, principal e false a imagem que inverte
    // E responsavel por fazer com que o toggle funcione
    this.isImage1 = !this.isImage1;
    // Variavel
    if (this.isImage1) {
      this.imageUrl = 'assets/nami.jpg';
    } else {
      this.imageUrl = 'assets/zoro.jpg';
    }

}}
