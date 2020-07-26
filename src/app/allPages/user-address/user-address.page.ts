import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Platform, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.page.html',
  styleUrls: ['./user-address.page.scss'],
})
export class UserAddressPage implements OnInit {
  title:string = "Address";
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
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public _products: ProductsService,
    private storage: Storage,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this._products.getCustomer("12").then(data => {
      let item = data[0];
      this.customerInfo = item;
      console.log(this.customerInfo);
      
      // userAddress = {
      //   billing: {
      //     first_name: this.customerInfo.first_name,
      //     last_name: this.customerInfo.last_name,
      //     address_1: this.customerInfo.address_1,
      //     address_2: this.customerInfo.address_2,
      //     city: this.customerInfo.city,
      //     state: this.customerInfo.state,
      //     postcode: this.customerInfo.postcode,
      //     country: this.customerInfo.country,
      //     email: this.customerInfo.email,
      //     phone: this.customerInfo.phone
      //   }
      // };
    });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
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
    
    this._products.updateUserAddress(this.userAddress,"1").subscribe(async (resp) => {
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
