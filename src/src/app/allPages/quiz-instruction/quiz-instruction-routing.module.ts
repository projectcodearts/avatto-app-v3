import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizInstructionPage } from './quiz-instruction.page';

const routes: Routes = [
  {
    path: '',
    component: QuizInstructionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizInstructionPageRoutingModule {}
