import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController,NavController } from '@ionic/angular';
import { OrdersPage } from '../../allPages/orders/orders.page';
import { ApiService } from 'src/app/allServices/api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = this.api.getCurrentUser();
  loggedin:any="false";
  userName:any;
  userEmail:any;
  constructor(public nav: NavController,public modalController: ModalController,  private api: ApiService,private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user) {
        this.loggedin = "true";
        console.log(user)
        this.userName = user.user_nicename;
        this.userEmail = user.user_email;
      } else {
        this.loggedin = "false";
        console.log('not logged in');
      }
    });
  }
  async logout() {
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
    this.nav.navigateForward("user-address");
    /*const modal = await this.modalController.create({
      component: UserAddressPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present(); */
  }
  

}