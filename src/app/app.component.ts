import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';



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
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router: Router,
    private oneSignal: OneSignal
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
  doRefresh(event){
    setTimeout(()=>{
      console.log('operation ended', event)
      event.target.complete();
    },2000)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /*this.statusBar.styleDefault();*/
      this.splashScreen.hide();
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#33000000");
      }

      this.oneSignal.startInit('18f94304-6229-4cbf-af68-815aee3ed1f7', '398470612714');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        
      });

      this.oneSignal.endInit();



    });
  }

  ngOnInit() {
   
  }
  ngAfterViewInit() { 
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  ngOnDestroy() { 
    this.backButtonSubscription.unsubscribe();
  }
}
