import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { MenuServices } from 'src/app/allServices/menu.service';


import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  title:string = "Avatto";
  exitmethod: any;
  menu: any[];
  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(public admob: AdMobFree,private _menu: MenuServices /*private _exitmethod: Platform*/) {
    /*this.exitmethod=this._exitmethod.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name === "HomePage"){
        if(window.confirm("Do You Want to Exit the Avatto?")){
          navigator["app"].exit();
        }
      }
    })*/
   }
   

  ngOnInit() {
    
  }
  ngOnDestroy(){
   
  }

  showBanner(){

    let bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true, // Remove in production
        autoShow: true,
        id: 'ca-app-pub-3940256099942544/6300978111',
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
        console.log('ad success');
    }).catch(e => console.log(e));

}

}
