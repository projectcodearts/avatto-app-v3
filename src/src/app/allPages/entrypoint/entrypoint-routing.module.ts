import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrypointPage } from './entrypoint.page';

const routes: Routes = [
  {
    path: '',
    component: EntrypointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrypointPageRoutingModule {}
