import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeQuestionDetailsPage } from './practice-question-details.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeQuestionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeQuestionDetailsPageRoutingModule {}
