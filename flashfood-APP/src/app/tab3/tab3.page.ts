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
      {name: 'Dutch Pie', price: '15,00', desc: '1 dutch pie - medium', image: '../../assets/img/desserts/dutch-pie.jpg'},
      {name: 'Chocolate Cake', price: '20,00', desc: '1 chocolate cake - small', image: '../../assets/img/desserts/chocolate-cake.jpeg'}
    ]

  }

}
