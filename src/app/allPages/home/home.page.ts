import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { MenuServices } from 'src/app/allServices/menu.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
import { AdmobService } from 'src/app/allServices/admob.service';


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
  constructor(public admob: AdMobFree,private _menu: MenuServices,private admobService: AdmobService) {
    
   }
   

   ngOnInit() {
    // const intervalMs = 100;

    // setInterval(() => {  
    //   this.admobService.ShowRewardVideo();
    // }, 70000);   

    // setInterval(() => {  
    //   this.admobService.ShowInterstitial();
    // }, 150000);  

    // this.admobService.ShowBanner();

    // //LOAD THE BANNER AT PAGE INIT
    // this.admobService.ShowBanner();
    }
    //FUNCTION FOR INTERSTITIAL
    Interstitial(){
    this.admobService.ShowInterstitial();
    }
    //FUNCTION FOR VIDEOREWARD
    Reward(){
    this.admobService.ShowRewardVideo();
    }
  ngOnDestroy(){
   
  }

  showBanner(){

    let bannerConfig: AdMobFreeBannerConfig = {
        
        autoShow: true,
        id: 'ca-app-pub-6514638375454017/8837959762',
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
        console.log('ad success');
    }).catch(e => console.log(e));

}

}
