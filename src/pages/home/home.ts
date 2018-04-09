import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items  : Object[] = [];
  itemsInCart: Object[] = [];

  constructor(public navCtrl: NavController) {

    this.items  = [
      { 'name': 'Hello World', quantityInCart: 0 , id: 1},
      { 'name': 'Hello1 World', quantityInCart: 0 , id: 2},
      { 'name': 'Hello2 World', quantityInCart: 0 , id: 3},
      { 'name': 'Hello3 World', quantityInCart: 0 , id: 4}
    ];
  }
  

  addToCart(item) {
    item.quantityInCart += 1;
    this.itemsInCart.push(item);  
    console.log(this.itemsInCart);

    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
  }


  goToList() {
    this.navCtrl.push(ListPage);
  }

}
