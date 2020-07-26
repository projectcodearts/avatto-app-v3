import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { MenuServices } from 'src/app/allServices/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  title:string = "Home";
  exitmethod: any;
  menu: any[];
  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(private _menu: MenuServices /*private _exitmethod: Platform*/) {
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

}
