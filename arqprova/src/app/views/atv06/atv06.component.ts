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
    this.isImage1 = !this.isImage1;
    if (this.isImage1) {
      this.imageUrl = 'assets/nami.jpg';
    } else {
      this.imageUrl = 'assets/zoro.jpg';
    }

}}
