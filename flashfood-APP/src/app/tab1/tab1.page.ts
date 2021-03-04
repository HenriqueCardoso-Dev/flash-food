import { Component } from '@angular/core';
import { product } from 'src/interfaceModel/product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private snacks: product[];

  constructor() {

    this.snacks = [
      {name: 'Double Cheese + 1 soda + portion', price: '30,45', desc: '1 brad, 2 hamburgers, 2 slice of cheese, ketchup', image:'../../assets/img/snacks/double-cheese.jpg'},
      {name: 'Mega Chicken', price: '16,50', desc: '1 brad, 2 chikens fillets, 1 slice of cheese cheddar, Lettuce', image:'../../assets/img/snacks/mega-chicken.png'},
      {name: 'Fried chicken', price: '18,90', desc: '1 Fried chicken portion', image:'../../assets/img/snacks/fried-chicken.jpeg'}
    ]

  }

}
