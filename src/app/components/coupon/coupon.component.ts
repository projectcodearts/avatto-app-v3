import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

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
  counponDetails:any;
  couponTitle:any;
  couponExcerpt:any;
  couponDescription:any;
  constructor(public toastCtrl: ToastController,private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://avatto.in/wp-json/avatto/v2/coupon-details').subscribe(response=>{
        
        const data = JSON.stringify(response)
        this.counponDetails = JSON.parse(data);
        this.couponTitle = this.counponDetails.title;
        this.couponExcerpt = this.counponDetails.excerpt;
        this.couponDescription = this.counponDetails.description;
    })
  }
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
