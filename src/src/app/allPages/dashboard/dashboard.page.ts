import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {

    this.storage.get('demo').then((val) => {
      console.log(val);
    });
   
  }
  ngOnDestroy(){
    
  }
  

}
