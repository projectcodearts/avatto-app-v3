import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusPagePage } from './aboutus-page.page';

const routes: Routes = [
  {
    path: '',
    component: AboutusPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutusPagePageRoutingModule {}
