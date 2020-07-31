import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../allServices/api.service';


declare var RazorpayCheckout:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  user = this.api.getCurrentUser();
  todo: { 
    couponCode: string, 
   } = {
    couponCode: ''
  };
  userid:any;
  
  userData:any;
  couponAdded:string = 'false';
  cartProduct : any = JSON.parse(localStorage.getItem("product"))?JSON.parse(localStorage.getItem("product")):[];
  price:any;
  couponData:any;
  orderData = {
    payment_method: "razorpay",
    payment_method_title: "Razorpay",
    set_paid: true,
    billing: {
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      email: "",
      phone: ""
    },
    line_items: [],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10",
      }
    ]
  };
  isChecked = "0";

  constructor( public platform: Platform,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public _products: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient,
    private storage: Storage,
    private api: ApiService
  ) { 
    //this.storage.clear();
    console.log(this.cartProduct);
    this.price = this.cartProduct.price;
    this.storage.get('userInfo').then((val) => {
      let userInfo = JSON.parse(val);
      console.log(userInfo.user_email);
      if(!userInfo){
        this.router.navigate(['/sign-in',{"routeParams":"checkout"}]);
      }

      this.http.get('https://avatto.in/wp-json/avatto/v2/user-id/?ue='+userInfo.user_email).subscribe(data=>{
        this.userData = data;
        if(this.userData.id !="null"){
          this.userid = this.userData.id;
        }
      })

    });

    
  }

  

  ngOnInit() {
    this.user.subscribe(user => {
      if (user) {
        console.log('logged in');
      } else {
        
        this.router.navigate(['/sign-in',{"routeParams":"checkout"}]);
      }
    });
    this._products.getPaymentGateways().subscribe(async (resp) => {
     console.log(resp)
    }, async (err) => {
      
    });
  }

  async appyCouponCode(){
    let loading = await this.loadingCtrl.create({
			cssClass: 'my-custom-class',
			message: 'Please wait...',
		});
    loading.present();

    
   
    this._products.appycoupon(this.todo.couponCode).subscribe(async (resp) => {
        loading.dismiss();	
        console.log(resp);
        this.couponData = resp;
        if(this.couponData.price !="0"){
          this.couponAdded = 'true';
          let ins = this.cartProduct.price/100;
          let dis = ins*this.couponData.price;
          console.log(ins);
          this.price = this.cartProduct.price-dis;
          loading.dismiss();		
          const toast = await this.toastCtrl.create({
              message: 'Coupon Added Successfully',
              duration: 2000
          });
          toast.present();
        }

        else{

          loading.dismiss();		
          const toast = await this.toastCtrl.create({
              message: 'Invalid Coupon Code',
              duration: 2000
          });
          toast.present();

        }
        
    }, async (err) => {
        loading.dismiss();		
        const toast = await this.toastCtrl.create({
            message: 'failed to upload.',
            duration: 2000
        });
        toast.present();
    });
  }

  payWithRazorpay() {
    //console.log(typeof(this.price));
    //this.createOrder();

    if(this.userid !=""){
      var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: "INR", // your 3 letter currency code
        key: "rzp_test_1DP5mmOlF5G5ag", // your Key Id from Razorpay dashboard
        amount: this.price, // Payment amount in smallest denomiation e.g. cents for USD
        name: 'Razorpay',
       
        prefill: {
          email: 'test@razorpay.com',
          contact: '9990009991',
          name: 'Razorpay'
        },
        theme: {
          color: '#F37254'
        },
        modal: {
          ondismiss: function () {
            alert('dismissed')
          }
        }
      };
  
      var successCallback = (payment_id) => {
        console.log("razor success",payment_id);
        this.storage.set("payment_id",payment_id);
        this.createOrder(); 
      };
  
      var cancelCallback = function (error) {
        alert(error.description + ' (Error ' + error.code + ')');
      };
  
      RazorpayCheckout.open(options);
      RazorpayCheckout.on('payment.success', successCallback);
      RazorpayCheckout.on('payment.cancel', cancelCallback);
    }

    else{
      this.router.navigate(['/sign-in',{"routeParams":"checkout"}]);
    }

    
  }

  async createOrder(){
    let loading = await this.loadingCtrl.create({
			cssClass: 'my-custom-class',
			message: 'Please wait...',
		});
    loading.present();
    let shillpingAddress = this.orderData.billing;
    this.orderData['shipping'] = shillpingAddress;
    //this.orderData['customer_id'] = 24;

    let products = {
      "product_id" : this.cartProduct.id,
      "quantity" : "1"
    }
    //this.orderData.line_items.push(products);

    if(this.couponAdded == "true"){
      const createOrderData = {
        payment_method: "razorpay",
        payment_method_title: "Razorpay",
        set_paid: true,
        discount_total: this.price,
  
        billing: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: "",
          phone: ""
        },
        shipping: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: "",
          phone: ""
        },
        line_items: [
          {
            product_id: this.cartProduct.id,
            quantity: 1,
            
          }
        ],
        coupon_lines:[
          {
            code:"LOVE2SHOP",
          }
          
  
        ]
      }

    createOrderData['shipping'] = shillpingAddress;
    createOrderData['billing'] = shillpingAddress;
    createOrderData['customer_id'] = this.userid;
    this.http.post("https://avatto.in/wp-json/wc/v3/orders?consumer_key=ck_ac58eb3d104d676d8c0543ac74b6ad5a3a3dd7a9&consumer_secret=cs_d7d0b84586275581ad4f307dc8f9e582fffee848", createOrderData)
      .subscribe(
        async data => {
          loading.dismiss();
          const toast = await this.toastCtrl.create({
                message: 'Order has been successfully placed.',
                duration: 2000
          });
          toast.present(); 
          this.router.navigate(['/profile']);   
          console.log("Order successfully created", data);
        },
        async error => {
          console.log("Error", error);
          const toast = await this.toastCtrl.create({
                  message: 'failed to place order.',
                  duration: 2000
            });
          toast.present();
        }
      );
    }

    else{
      const createOrderData = {
        payment_method: "razorpay",
        payment_method_title: "Razorpay",
        set_paid: true,
        discount_total: this.price,
  
        billing: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: "",
          phone: ""
        },
        shipping: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: "",
          phone: ""
        },
        line_items: [
          {
            product_id: this.cartProduct.id,
            quantity: 1,
            
          }
        ],
        
      }

    createOrderData['shipping'] = shillpingAddress;
    createOrderData['billing'] = shillpingAddress;
    createOrderData['customer_id'] = 24;
    this.http.post("https://avatto.in/wp-json/wc/v3/orders?consumer_key=ck_ac58eb3d104d676d8c0543ac74b6ad5a3a3dd7a9&consumer_secret=cs_d7d0b84586275581ad4f307dc8f9e582fffee848", createOrderData)
      .subscribe(
        async data => {
          loading.dismiss();
          const toast = await this.toastCtrl.create({
                message: 'Order has been successfully placed.',
                duration: 2000
          });
          toast.present(); 
          this.router.navigate(['/profile']);   
          console.log("Order successfully created", data);
        },
        async error => {
          console.log("Error", error);
          const toast = await this.toastCtrl.create({
                  message: 'failed to place order.',
                  duration: 2000
            });
          toast.present();
        }
      );
    }
  }

  checkTerm(){
    if(this.isChecked != '1') {
      this.isChecked = "1";
    } else {
      this.isChecked = "0";
    }
  }

}
