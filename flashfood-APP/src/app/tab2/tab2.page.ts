import { Component } from '@angular/core';
import { product } from 'src/interfaceModel/product';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private drinks:product[];

  constructor() {

    this.drinks = [
      {name: 'Sprite - 250ml', price: '5,00', desc: '1 Soda can', image: '../../assets/img/drinks/sprite-250.png'},
      {name: 'Coca-Cola - 350ml', price: '5,50', desc: '1 Soda can', image: '../../assets/img/drinks/coca-cola-350.jpg'},
      {name: 'Guaraná - 350ml', price: '5,50', desc: '1 Soda can', image: '../../assets/img/drinks/guarana-350.jpg'},
      {name: 'Glass of Natural juice', price: '7,80', desc: '1 glass of natural juice of any flavor', image: '../../assets/img/drinks/natural-juice.png'},
      {name: 'Stella Artois - 4x 330ml', price: '26,00', desc: '4 lager beer bottles', image: '../../assets/img/drinks/stella-artois-4x330.jpg'},
      {name: 'Budweiser - 6x 330ml', price: '39,00', desc: '6 larger beer bottles', image: '../../assets/img/drinks/budweiser-6x330.jpg'}
    ]

  }

}
