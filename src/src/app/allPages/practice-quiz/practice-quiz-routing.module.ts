import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeQuizPage } from './practice-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeQuizPageRoutingModule {}
