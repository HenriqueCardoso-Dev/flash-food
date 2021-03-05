import { Component } from '@angular/core';
import { product } from 'src/interfaceModel/product';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private desserts:product[];

  constructor() {

    this.desserts = [
      {name: 'Ice Cream', price: '4,20', desc: '1 pot of ice cream of any flavor ', image: '../../assets/img/desserts/pot-of-ice-cream.jpg'},
      {name: 'Milk Shake', price: '6,00', desc: '1 milk shake of any flavor', image: '../../assets/img/desserts/milk-shake.jpg'},
      {name: 'Dutch Pie', price: '15,00', desc: '1 dutch pie - medium', image: '../../assets/img/desserts/dutch-pie.jpg'},
      {name: 'Strawberry Pie', price: '15,00', desc: '1 strawberry pie - medium', image: '../../assets/img/desserts/strawberry-pie.png'},
      {name: 'Chocolate Cake', price: '20,00', desc: '1 chocolate cake - small', image: '../../assets/img/desserts/chocolate-cake.jpeg'},
      {name: 'Chocolate Pudding', price: '10,00', desc: '1 chocolate pudding - medium', image: '../../assets/img/desserts/chocolate-pudding.png'}
    ]

  }

}
