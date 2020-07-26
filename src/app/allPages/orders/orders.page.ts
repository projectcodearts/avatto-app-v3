import { Component, OnInit, Input  } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  title:string = "Orders";
  constructor(public _products: ProductsService,private storage: Storage, public modalController: ModalController, private router: Router) { }
  orderList : [];
  ngOnInit() {
    
    this._products.getPastOrders("1").then(data => {
      let item = data[0];
      this.orderList = item;
    });
    
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  

}
