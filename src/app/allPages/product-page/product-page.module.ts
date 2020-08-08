import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPagePageRoutingModule } from './product-page-routing.module';

import { ProductPagePage } from './product-page.page';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductItemComponent } from '../../components/products/product-item/product-item.component';
import { TextshortPipe } from '../../allPipes/textshort.pipe';
import { FilterComponent } from 'src/app/components/products/filter/filter.component';
import { SharedModuleModule } from 'src/app/sharedModule/shared-module/shared-module.module';
import { FiltercategoryComponent } from 'src/app/components/products/filter/filtercategory/filtercategory.component';
import { FilterItemComponent } from 'src/app/components/products/filter/filtercategory/filter-item/filter-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPagePageRoutingModule,
    SharedModuleModule
  ],
  declarations: [ProductPagePage, ProductsComponent, ProductItemComponent, FilterComponent, FiltercategoryComponent, FilterItemComponent, TextshortPipe]
})
export class ProductPagePageModule {}
