import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPagePageRoutingModule } from './checkout-page-routing.module';

import { CheckoutPagePage } from './checkout-page.page';
import { CheckoutComponent } from '../../components/checkout/checkout.component';
import { SharedModuleModule } from 'src/app/sharedModule/shared-module/shared-module.module';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModuleModule,
    CheckoutPagePageRoutingModule
  ],
  declarations: [CheckoutPagePage, CheckoutComponent]
})
export class CheckoutPagePageModule {}
