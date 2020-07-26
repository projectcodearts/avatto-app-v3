import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  todo: { 
    couponCode: string, 
   } = {
    couponCode: ''
  };
  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {}
  async copyText(val: string){
    let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
     
      const toast = await this.toastCtrl.create({
        message: 'Copied The Coupon Code',
        duration: 2000
      });
      toast.present();
    }

}
