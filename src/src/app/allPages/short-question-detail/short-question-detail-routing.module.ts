import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortQuestionDetailPage } from './short-question-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ShortQuestionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortQuestionDetailPageRoutingModule {}
