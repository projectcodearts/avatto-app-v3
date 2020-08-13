import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Platform, LoadingController, ToastController, ModalController,NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.page.html',
  styleUrls: ['./user-address.page.scss'],
})
export class UserAddressPage implements OnInit {
  title:string = "Address";
  userid:any;
  userData:any;
   customerInfo :any = [];
   userAddress = {
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
    }
  };
  constructor(public platform: Platform,
    public nav: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public _products: ProductsService,
    private storage: Storage,
    private http:HttpClient,
    public modalController: ModalController,
  ) { }

  ngOnInit() {

    this.storage.get('userInfo').then((val) => {
      let userInfo = JSON.parse(val);
      console.log(userInfo.user_email);
      if(!userInfo){
        
      }

      this.http.get('https://avatto.in/wp-json/avatto/v2/user-id/?ue='+userInfo.user_email).subscribe(data=>{
        this.userData = data;
        if(this.userData.id !="null"){
          this.userid = this.userData.id;
          this._products.getCustomer(this.userid).then(data => {
            let item = data[0];
            this.customerInfo = item;
            this.userAddress.billing = item.billing;
            console.log(this.customerInfo);
          });
        }
      })

    });

    
  


    
  }

  ionViewDidEnter(){
    
  }

  dismiss() {
    this.nav.back();
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    /*this.modalController.dismiss({
      'dismissed': true
    });*/
  }

  async updateAddress(){
    console.log("hi");
    let loading = await this.loadingCtrl.create({
			cssClass: 'my-custom-class',
			message: 'Please wait...',
		});
    loading.present();
    let shillpingAddress = this.userAddress.billing;
    this.userAddress['shipping'] = shillpingAddress;
    
    this._products.updateUserAddress(this.userAddress,this.userid).subscribe(async (resp) => {
      loading.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Address has been successfully updated.',
        duration: 2000
      });
      toast.present();
    }, async (err) => {
        loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'failed to update order.',
          duration: 2000
        });
        toast.present();
    });   
  }
}