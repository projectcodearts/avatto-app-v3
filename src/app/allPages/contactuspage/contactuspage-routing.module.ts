import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactuspagePage } from './contactuspage.page';

const routes: Routes = [
  {
    path: '',
    component: ContactuspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactuspagePageRoutingModule {}
