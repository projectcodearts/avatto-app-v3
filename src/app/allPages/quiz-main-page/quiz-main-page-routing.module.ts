import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizMainPagePage } from './quiz-main-page.page';

const routes: Routes = [
  {
    path: '',
    component: QuizMainPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizMainPagePageRoutingModule {}
