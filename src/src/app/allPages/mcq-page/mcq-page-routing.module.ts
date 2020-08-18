import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McqPagePage } from './mcq-page.page';

const routes: Routes = [
  {
    path: '',
    component: McqPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McqPagePageRoutingModule {}
