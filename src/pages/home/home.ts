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
    // declarations
    var flag = 0;
    var len = this.itemsInCart.length;
    var i = 0;

    console.log(len);



    for (i; i < len; i++) {
      // if name matches
      console.log(item.id)
      if (item.id == this.itemsInCart[i]['id']) {
        flag = 1;
        break;
      } else {
        // do nothing
      }
    }
    
        if (flag == 0) {
      // new entry push in array
          this.itemsInCart.push(item);
        }
    console.log(this.itemsInCart);

    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));





    // WORKING QTY ISSUE
    // item.quantityInCart += 1;
    // this.itemsInCart.push(item);
    // console.log(this.itemsInCart);

    // localStorage.setItem('cart', JSON.stringify(this.itemsInCart));

  }


  goToList() {
    this.navCtrl.push(ListPage);
  }

}
