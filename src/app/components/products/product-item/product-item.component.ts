import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ProductsService } from '../../../allServices/products.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  fetching = false;
  title: string = "Products";
  product: any = []; 
  moreProducts: any = []; 
  error:string;
  loading: any;
  cartData:any= [];
  baseProducts:any= [];
  fun: any;
  constructor(private _products: ProductsService,public toast: ToastController,public loadingController: LoadingController,private storage: Storage) { }
  ngOnInit() {
    this.fetching = true;
    this._products.getproducts().pipe().subscribe(data=>{
      
      const demo = JSON.stringify(data)
      this.product = data;
      this.fetching = false;
      console.log(this.product);
    });
    this.getCartData();
  }

  async addToCart(product){
    console.log(product);
    this.storage.set('product',JSON.stringify(product));
    localStorage.setItem("product",JSON.stringify(product));
    const toast = await this.toast.create({
      message: 'Added to Cart',
      duration: 2000
    });
    toast.present();
  }

  getCartData() {
    let i =0;
    this.storage
      .forEach((value, key) => {
        const obj = {};
        const demo = JSON.stringify(value)
        const parsedData = (value);
        this.cartData.push(parsedData);
        obj['product_id'] = parsedData.id;
        obj['price'] = parseInt(parsedData.price, 10);
        obj['quantity'] = 1;
        this.baseProducts.push(obj);
        i++;
        
      })
      .then(() => {
        console.log(i);
        this.storage.set("quantity",i);
      });
      console.log(this.baseProducts);
  }

}
