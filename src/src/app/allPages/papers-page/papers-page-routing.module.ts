import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapersPagePage } from './papers-page.page';

const routes: Routes = [
  {
    path: '',
    component: PapersPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapersPagePageRoutingModule {}
