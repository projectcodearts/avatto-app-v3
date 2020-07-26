import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeQuestionPage } from './practice-question.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeQuestionPageRoutingModule {}
