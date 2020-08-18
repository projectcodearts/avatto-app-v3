import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddressPage } from './user-address.page';

const routes: Routes = [
  {
    path: '',
    component: UserAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAddressPageRoutingModule {}
