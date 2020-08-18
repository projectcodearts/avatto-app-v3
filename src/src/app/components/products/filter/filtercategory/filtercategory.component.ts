import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WoocategoryService } from 'src/app/allServices/woocategory.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.component.html',
  styleUrls: ['./filtercategory.component.scss'],
})
export class FiltercategoryComponent implements OnInit {
  fetching = false;
  fcategory: any = []; 
  constructor(public modalController: ModalController,private router:Router, private _featuredCat: WoocategoryService) { }

  ngOnInit() {
    this.fetching = true;
    this._featuredCat.getallCategories().pipe().subscribe(response=>{
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

  filter(id){
    let catid = id;
    console.log(catid);
    this.router.navigate(['/product', catid]);
    this.dismiss();
  }


 

}
