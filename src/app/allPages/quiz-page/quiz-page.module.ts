import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPagePageRoutingModule } from './quiz-page-routing.module';

import { QuizPagePage } from './quiz-page.page';
import { AllQuizComponent } from '../../components/quiz/all-quiz/all-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPagePageRoutingModule
  ],
  declarations: [QuizPagePage, AllQuizComponent]
})
export class QuizPagePageModule {}
