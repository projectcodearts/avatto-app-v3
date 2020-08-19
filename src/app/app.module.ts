import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
/*import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';*/
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from './allServices/common.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EntrypointComponent } from './components/entrypoint/entrypoint.component';

import { MenuComponent } from './components/shared/header/menu/menu.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';


@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent, FooterComponent, EntrypointComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    /*LottieSplashScreen,*/
    CommonService,
    FormBuilder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer,
    OneSignal,
    AdMobFree
   
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}