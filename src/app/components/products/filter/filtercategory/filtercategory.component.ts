import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryServicesService } from 'src/app/allServices/category-services.service';

@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.component.html',
  styleUrls: ['./filtercategory.component.scss'],
})
export class FiltercategoryComponent implements OnInit {
  fetching = false;
  fcategory: any = []; 
  constructor(public modalController: ModalController, private _featuredCat: CategoryServicesService) { }

  ngOnInit() {
    this.fetching = true;
    this._featuredCat.getfeaturedCategory().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.fcategory = JSON.parse(data);
      this.fetching = false;
      
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


 

}
