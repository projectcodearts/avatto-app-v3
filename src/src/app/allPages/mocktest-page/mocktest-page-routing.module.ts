import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MocktestPagePage } from './mocktest-page.page';

const routes: Routes = [
  {
    path: '',
    component: MocktestPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MocktestPagePageRoutingModule {}
