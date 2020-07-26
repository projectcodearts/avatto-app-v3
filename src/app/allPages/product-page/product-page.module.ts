import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPagePageRoutingModule } from './product-page-routing.module';

import { ProductPagePage } from './product-page.page';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductItemComponent } from '../../components/products/product-item/product-item.component';
import { TextshortPipe } from '../../allPipes/textshort.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPagePageRoutingModule
  ],
  declarations: [ProductPagePage, ProductsComponent, ProductItemComponent, TextshortPipe]
})
export class ProductPagePageModule {}
