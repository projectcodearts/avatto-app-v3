import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.page.html',
  styleUrls: ['./checkout-page.page.scss'],
})
export class CheckoutPagePage implements OnInit {

  title:string = "Checkout";
  constructor() { }

  ngOnInit() {
  }

}
