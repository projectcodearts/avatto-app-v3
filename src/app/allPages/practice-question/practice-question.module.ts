import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeQuestionPageRoutingModule } from './practice-question-routing.module';

import { PracticeQuestionPage } from './practice-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeQuestionPageRoutingModule
  ],
  declarations: [PracticeQuestionPage]
})
export class PracticeQuestionPageModule {}
