import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../allServices/products.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  fetching = false;
  product: any = []; 
  cartData:any= [];
  baseProducts:any= [];
  id_url;
  selectedItems;
  constructor(private _productdetails: ProductsService, private _activatedRoute : ActivatedRoute, public toast: ToastController,public loadingController: LoadingController,private storage: Storage) { }

  ngOnInit() {
    this.fetching = true;
    let pid = this._activatedRoute.snapshot.params.id;
    this._productdetails.getProduct(pid).pipe().subscribe(response=>{
      console.log(response);
      const data = JSON.stringify(response)
      this.product = JSON.parse(data);
      this.fetching = false;
    });
    
    
  }
  async addToCart(product){
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
