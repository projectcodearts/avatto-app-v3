import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page-details',
  templateUrl: './product-page-details.page.html',
  styleUrls: ['./product-page-details.page.scss'],
})
export class ProductPageDetailsPage implements OnInit {

  title:string = "Products";
  constructor() { }

  ngOnInit() {
  }

}
