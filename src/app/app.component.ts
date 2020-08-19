import { Component, OnInit } from '@angular/core';
/*import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';*/
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Event, Router, NavigationStart, NavigationEnd,ActivatedRoute } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  backButtonSubscription;
  showLoadingIndicator: boolean = true;
 
  constructor(
    private platform: Platform,
    /*private splashScreen: SplashScreen,*/
    /*private splashScreen: LottieSplashScreen,*/
    private spalashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router: Router,
    private route: ActivatedRoute,
    private oneSignal: OneSignal,
    private admobFree: AdMobFree
  ) {
    
    /*this._router.events.subscribe((routerEvent: Event)=>{
			if(routerEvent instanceof NavigationStart){
				this.showLoadingIndicator = true;
			}
			if(routerEvent instanceof NavigationEnd){
				this.showLoadingIndicator = false;
			}
		});*/
    this.initializeApp();
  }
  showbannarad(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: 'ca-app-pub-6514638375454017~4618872520',
      isTesting: true,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }
  doRefresh(event){
    setTimeout(()=>{
      console.log('operation ended', event)
      event.target.complete();
    },2000)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.spalashScreen.hide();
      /*this.statusBar.styleDefault();*/
      /*setTimeout(() => {
        this.splashScreen.hide();
      }, 2500);*/
      if (this.platform.is('android')) {
        /*this.statusBar.hide();*/
        this.statusBar.backgroundColorByHexString("#33000000");
      }

      this.oneSignal.startInit('18f94304-6229-4cbf-af68-815aee3ed1f7', '398470612714');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((data) => {

        let msg = data.payload.body;
        let title = data.payload.title;
        let additionalData = data.payload.additionalData;
        this._router.navigate(['/categories', additionalData.task]);
      
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        
      });

      this.oneSignal.endInit();



    });
  }

  ngOnInit() {
   
  }
  
}
