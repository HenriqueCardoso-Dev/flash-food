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
      {name: 'Double Cheese + 1 soda + portion', price: '30,45', desc: '1 bread, 2 hamburgers, 2 slice of cheese, ketchup', image:'../../assets/img/snacks/double-cheese.jpg'},
      {name: 'Mega Chicken', price: '16,50', desc: '1 brad, 2 chikens fillets, 1 slice of cheese cheddar, Lettuce', image:'../../assets/img/snacks/mega-chicken.png'},
      {name: 'Double Salad', price: '19,90', desc: '1 bread, 2 hamburgers, cheese, lettuce, tomato, mayo', image:'../../assets/img/snacks/double-salad.png'},
      {name: 'Special Bacon', price: '19,90', desc: '1 bread, 2 hamburger, bacon, 2 slice of cheese, lettuce, tomato, ketchup, special sauce', image:'../../assets/img/snacks/special-bacon.png'},
      {name: 'Fried chicken', price: '18,90', desc: '1 Fried chicken portion', image:'../../assets/img/snacks/fried-chicken.jpeg'},
      {name: 'French Fries', price: '16,90', desc: '1 French fries portion', image:'../../assets/img/snacks/french-fries.png'}
    ]

  }

}
