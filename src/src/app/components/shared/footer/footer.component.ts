import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  qtn: any; 

  constructor(private router: Router,private storage: Storage) { }

  ngOnInit() {
    this.storage.get('quantity').then(async data => {
     this.qtn = data;
    });
    
  }

}
