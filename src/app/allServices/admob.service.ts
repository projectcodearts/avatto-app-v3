import { Injectable } from '@angular/core';
//IMPORT PLATFORM SO WE CAN START ADMOB AS SOON AS IT'S READY.
import { Platform } from '@ionic/angular';
import { LoadingController,ToastController } from '@ionic/angular';
//IMPORT WHAT WE NEED FROM ADMOBFREE PLUGIN.
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {


  

  //BANNER CONFIG
  bannerConfig: AdMobFreeBannerConfig = {
  id: 'ca-app-pub-6514638375454017/9412674832',  
  autoShow: true,
  isTesting:false
  
  };
  //INTERSTITIAL CONFIG
  interstitialConfig: AdMobFreeInterstitialConfig = {
    id: 'ca-app-pub-6514638375454017/8837959762',  
    autoShow: true,
    isTesting:false
  //id: "ID GENERATED AT ADMOB ca-app-pub FOR PROD"
  };
  //REWARD VIDEO CONFIG.
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    id: 'ca-app-pub-3940256099942544/5224354917',  
    autoShow: false,
    isTesting:false
  //id: "ID GENERATED AT ADMOB ca-app-pub FOR PROD"
  };
  //ADD PLATFORM Y ADMOB AT CONSTRUCTOR.
  constructor(
  public platform: Platform,
  private admobFree: AdMobFree,
  public toast: ToastController,
  public loadingController: LoadingController
  ) {
  //LOAD ADS AT PLATFORM READY PROMISE.
  platform.ready().then(()=>{
  //BANNER
  this.admobFree.banner.config(this.bannerConfig);
  //INTERSTITIAL
  this.admobFree.interstitial.config(this.interstitialConfig);
  this.admobFree.interstitial.prepare().then(async () => {
    //this.admobFree.interstitial.show();
  }).catch(async (e) =>{
  console.log('PROBLEM LOADING INTERSTITIAL: ', e);
  
  });
  //REWARD VIDEO
  this.admobFree.rewardVideo.config(this.RewardVideoConfig);
  this.admobFree.rewardVideo.prepare().then(() => {
  //this.admobFree.rewardVideo.show();  
  console.log('REWARD VIDEO LOADED')
  }).catch((e) =>{
  console.log('PROBLEM LOADING REWARDVIDEO: ', e)
    });
  });
  }
  ShowBanner() {
  //CHECK AND SHOW BANNER
  this.admobFree.banner.prepare().then(() => {
  console.log('BANNER LOADED')
  }).catch(e =>
  console.log('PROBLEM LOADING BANNER: ', e)
  );
  }
  ShowInterstitial() {
  //CHECK AND SHOW INTERSTITIAL
  this.admobFree.interstitial.isReady().then(() => {

    this.admobFree.interstitial.prepare();
  //AT .ISREADY SHOW 
  this.admobFree.interstitial.show().then(async (e) => {

    // const toast = await this.toast.create({
    //   message: 'INTERSTITIAL LOADED',
    //   duration: 2000
    // });
    // toast.present();
  console.log('INTERSTITIAL LOADED')
  })
  .catch(async (e) =>{ 
    console.log('PROBLEM LOADING REWARD VIDEO: ', e);
    // const toast = await this.toast.create({
    //   message: e,
    //   duration: 2000
    // });
    // toast.present();

  });
  })
  .catch(async (e) => {
    console.log('PROBLEM LOADING REWARD VIDEO: ', e);

    // const toast = await this.toast.create({
    //   message: e,
    //   duration: 2000
    // });
    // toast.present();
      
  });
  }
  
  ShowRewardVideo() {
  //CHECK AND SHOW REWARDVIDEO
  this.admobFree.rewardVideo.isReady().then(() => {
    this.admobFree.rewardVideo.prepare();
  //AT .ISREADY SHOW
  this.admobFree.rewardVideo.show().then(() => {
  console.log('BANNER LOADED')
  })
  .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  );
  })
  .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  );
  }
  }
