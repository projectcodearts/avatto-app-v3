import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizExplainPageRoutingModule } from './quiz-explain-routing.module';

import { QuizExplainPage } from './quiz-explain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizExplainPageRoutingModule
  ],
  declarations: [QuizExplainPage]
})
export class QuizExplainPageModule {}
