import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPagePageRoutingModule } from './cart-page-routing.module';

import { CartPagePage } from './cart-page.page';
import { CartComponent } from '../../components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPagePageRoutingModule
  ],
  declarations: [CartPagePage, CartComponent]
})
export class CartPagePageModule {}
