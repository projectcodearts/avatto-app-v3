import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeQuestionDetailsPageRoutingModule } from './practice-question-details-routing.module';

import { PracticeQuestionDetailsPage } from './practice-question-details.page';
import { PracticeQuestionDetailsComponent } from 'src/app/components/practice-question-details/practice-question-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeQuestionDetailsPageRoutingModule
  ],
  declarations: [PracticeQuestionDetailsPage,PracticeQuestionDetailsComponent]
})
export class PracticeQuestionDetailsPageModule {}
