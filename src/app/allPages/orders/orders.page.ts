import { Component, OnInit, Input  } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  title:string = "Orders";
  userid:any;
  userData:any;
  orderDatas:any;
  fetching = false;
  constructor(public _products: ProductsService,private http:HttpClient,private storage: Storage, public modalController: ModalController, private router: Router) { }
  orderList : [];
  ngOnInit() {
    this.fetching = true;
    this.storage.get('userInfo').then((val) => {
      let userInfo = JSON.parse(val);
      console.log(userInfo.user_email);
      if(!userInfo){
        
      }

      this.http.get('https://avatto.in/wp-json/avatto/v2/user-id/?ue='+userInfo.user_email).subscribe(data=>{
        
        this.userData = data;
        if(this.userData.id !="null"){
          this.userid = this.userData.id;
          this.http.get('https://avatto.in/wp-json/avatto/v2/order-history/'+this.userid).subscribe(data=>{
             
            const response = JSON.stringify(data)
            this.orderDatas = JSON.parse(response);
            this.fetching = false;
          })
        }
      })

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
