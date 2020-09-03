import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ProductsService } from '../../../allServices/products.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  fetching = false;
  title: string = "Products";
  product: any = []; 
  producttwo: any = [];
  productall: any = [];
  moreProducts: any = []; 
  error:string;
  loading: any;
  cartData:any= [];
  baseProducts:any= [];
  fun: any;
  onlinepro: boolean = true;
  offlinepro: boolean = false;
  onactive: boolean = false;
  offactive: boolean = false;
  constructor(private route: ActivatedRoute,private router:Router,private _products: ProductsService,public toast: ToastController,public loadingController: LoadingController,private storage: Storage) { }
  ngOnInit() {
    this.fetching = true;
    this.onlinepro=true;
    this.offlinepro=false;
    let id = this.route.snapshot.paramMap.get('id');
    this._products.getproductsall().pipe().subscribe(data=>{
      
      const demo = JSON.stringify(data)
      this.product = data;
      this.fetching = false;
      console.log(this.product);
    });
    this.onactive=true;
    this.offactive=false;
    
   /* this._products.getproductstwo().pipe().subscribe(data=>{
      const demo = JSON.stringify(data)
      this.producttwo = data;
      console.log(this.producttwo);
    });
    
    this._products.getproductsall().pipe().subscribe(data=>{
      
      const demo = JSON.stringify(data)
      this.productall = data;
      console.log(this.productall);
    });*/
    this.getCartData();
  }
  onlineclick(){
    this.fetching = true;
    this.onlinepro=true;
    this.offlinepro=false;
    this.onactive=true;
    this.offactive=false;
    this._products.getproducts(201).pipe().subscribe(data=>{
      const demo = JSON.stringify(data)
      this.product = data;
      this.fetching = false;
      console.log(this.product);
    });
  }
  offlineclick(){
    this.fetching = true;
    this.onlinepro=false;
    this.offlinepro=true;
    this.onactive=false;
    this.offactive=true;
    this._products.getproductstwo().pipe().subscribe(data=>{
      const demo = JSON.stringify(data)
      this.producttwo = data;
      this.fetching = false;
      console.log(this.producttwo);
    });
    
  }
  

  async addToCart(product){
    console.log(product);
    this.storage.set('product',JSON.stringify(product));
    localStorage.setItem("product",JSON.stringify(product));
    const toast = await this.toast.create({
      /*message: 'Added to Cart Online Product',*/
      message: 'Added to Cart',
      duration: 2000
    });
    toast.present();
  }
  async addToCarttwo(producttwo){
    console.log(producttwo);
    this.storage.set('producttwo',JSON.stringify(producttwo));
    localStorage.setItem("producttwo",JSON.stringify(producttwo));
    const toast = await this.toast.create({
      message: 'Added to Cart Offline Product',
      duration: 2000
    });
    toast.present();
  }
  async addToCartall(productall){
    console.log(productall);
    this.storage.set('productall',JSON.stringify(productall));
    localStorage.setItem("productall",JSON.stringify(productall));
    const toast = await this.toast.create({
      message: 'Added to Cart All Products',
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
