import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {

  title:string = "Cart";
  constructor() { }

  ngOnInit() {
  }

}
