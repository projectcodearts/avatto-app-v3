import { Component, OnInit } from '@angular/core';
import { MenuServices } from 'src/app/allServices/menu.service';
import { ApiService } from 'src/app/allServices/api.service';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  user = this.api.getCurrentUser();
  loggedin:any="false";
  menu: any[];
  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(private _menu: MenuServices, private api: ApiService,private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.menu = this._menu.getmenu();
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

}
