import { Component, OnInit } from '@angular/core';
import { CategoryServicesService } from '../../allServices/category-services.service';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.scss'],
})
export class AllcategoriesComponent implements OnInit {

  fetching = false;
  allcategory: any = []; 
  constructor(private _featuredCat: CategoryServicesService) { }
  ngOnInit() {
    this.fetching = true;
    this._featuredCat.getallCategories().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.allcategory = JSON.parse(data);
      this.fetching = false;
    });
  }

}
