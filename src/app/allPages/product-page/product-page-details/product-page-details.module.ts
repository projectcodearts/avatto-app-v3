import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageDetailsPageRoutingModule } from './product-page-details-routing.module';

import { ProductPageDetailsPage } from './product-page-details.page';

import { ProductsService } from '../../../allServices/products.service';
import { ProductDetailsComponent } from '../../../components/products/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageDetailsPageRoutingModule
  ],
  declarations: [ProductPageDetailsPage, ProductDetailsComponent],
  providers: [ProductsService]
})
export class ProductPageDetailsPageModule {}
