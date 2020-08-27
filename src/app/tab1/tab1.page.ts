import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dado1: number;
  dado2: number;
  dado3: number;
  dado4: number;
  resultado: string;

  constructor() {}

  lanzar(){
    this.dado1 = Math.floor(Math.random() * 3) + 1;
    this.dado2 = Math.floor(Math.random() * 3) + 1;
    this.dado3 = Math.floor(Math.random() * 3) + 1;
    this.dado4 = Math.floor(Math.random() * 3) + 1;

    if (this.dado1 === 0 && this.dado2 === 0 && this.dado3 === 0 && this.dado4 === 0) {
      this.resultado = 'none';
    } else if(this.dado1 === this.dado2 && this.dado1 === this.dado3 && this.dado1 === this.dado4) {
      this.resultado = 'iguales';
    } else {
      this.resultado = 'no_iguales';
    }

  }
}
