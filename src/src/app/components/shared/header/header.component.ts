import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  qtn: any; 

  constructor(private router: Router,private storage: Storage) { }
  
  ngOnInit() {
    this.storage.get('quantity').then(async data => {
     this.qtn = data;
    });
    
  }
   
  

}
