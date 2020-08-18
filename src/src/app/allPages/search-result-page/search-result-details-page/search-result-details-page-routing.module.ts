import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultDetailsPagePage } from './search-result-details-page.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultDetailsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultDetailsPagePageRoutingModule {}
