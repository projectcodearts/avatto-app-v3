import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { OrdersPage } from '../../allPages/orders/orders.page';
import { UserAddressPage } from 'src/app/allPages/user-address/user-address.page';
import { ApiService } from 'src/app/allServices/api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = this.api.getCurrentUser();
  loggedin:any="false";
  constructor(public modalController: ModalController, private api: ApiService,private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user) {
        this.loggedin = "true";
      } else {
        this.loggedin = "false";
        console.log('not logged in');
      }
    });
  }
  async logout() {
    console.log('here');
    this.api.logout();
    const toast = await this.toastCtrl.create({
      message: 'Log Out SuccessFully',
      duration: 2000
    });
    toast.present();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: OrdersPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async profileModal() {
    const modal = await this.modalController.create({
      component: UserAddressPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  

}
