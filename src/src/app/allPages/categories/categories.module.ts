import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { AllcategoriesComponent } from '../../components/allcategories/allcategories.component';
import { CategoryServicesService } from '../../allServices/category-services.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule
  ],
  declarations: [CategoriesPage, AllcategoriesComponent],
  providers: [CategoryServicesService]
})
export class CategoriesPageModule {}
