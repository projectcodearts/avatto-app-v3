import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MenuServices } from 'src/app/allServices/menu.service';
import { ApiService } from 'src/app/allServices/api.service';
import { ToastController, AlertController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy/*AfterViewInit*/ {
  user = this.api.getCurrentUser();
  backButtonSubscription; 
  loggedin:any="false";
  menu: any[];
  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(private _menu: MenuServices, private api: ApiService,private toastCtrl: ToastController, private alertCtrl: AlertController, private platform: Platform) { }

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

  /*ngAfterViewInit() { 
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
      const alert = this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Are you Sure you want to finish!',
        message: 'Your marks will be calculated base on your parformance in the test.',
        buttons: ['OK']
      });
    });
  }*/

  /*backButtonEvent(){
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }*/

  /*ngOnDestroy() { 
    this.backButtonSubscription.unsubscribe();
  }*/

  backButtonEvent() { 
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  exitApps(){
    navigator['app'].exitApp();
  }

  ngOnDestroy() { 
    this.backButtonSubscription.unsubscribe();
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
