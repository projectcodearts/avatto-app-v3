import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeQuizPageRoutingModule } from './practice-quiz-routing.module';

import { PracticeQuizPage } from './practice-quiz.page';
import { PracticeQuizListingComponent } from '../../components/practice-quiz-listing/practice-quiz-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeQuizPageRoutingModule
  ],
  declarations: [PracticeQuizPage,PracticeQuizListingComponent]
})
export class PracticeQuizPageModule {}
