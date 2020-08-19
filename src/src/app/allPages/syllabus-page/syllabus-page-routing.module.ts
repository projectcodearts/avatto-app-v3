import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyllabusPagePage } from './syllabus-page.page';

const routes: Routes = [
  {
    path: '',
    component: SyllabusPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyllabusPagePageRoutingModule {}
