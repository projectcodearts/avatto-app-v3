import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProduct : any = '';
  img:any= '';
  constructor(public toast: ToastController,public loadingController: LoadingController,private storage: Storage) {
    
  }

  ngOnInit() {
    //console.log(this.cartProduct);
    this.storage.get('product').then((val) => {
      
      this.cartProduct = JSON.parse(val);
      this.img = this.cartProduct.images[0].src;
      console.log('Your Cart Value is', this.cartProduct);
    });
  }

  ionViewWillLeave(){
    console.log("leave page");
  }

  removeCart(){
    delete this.cartProduct;
    localStorage.setItem("product",'');
  }

}
