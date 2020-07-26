import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutPagePage } from './checkout-page.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutPagePageRoutingModule {}
