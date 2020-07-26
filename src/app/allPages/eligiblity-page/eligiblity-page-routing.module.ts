import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EligiblityPagePage } from './eligiblity-page.page';

const routes: Routes = [
  {
    path: '',
    component: EligiblityPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EligiblityPagePageRoutingModule {}
