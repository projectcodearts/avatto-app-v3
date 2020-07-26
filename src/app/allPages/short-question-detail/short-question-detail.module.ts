import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortQuestionDetailPageRoutingModule } from './short-question-detail-routing.module';

import { ShortQuestionDetailPage } from './short-question-detail.page';
import { ShortQuestionDetailsComponent } from '../../components/short-question-details/short-question-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortQuestionDetailPageRoutingModule
  ],
  declarations: [ShortQuestionDetailPage,ShortQuestionDetailsComponent]
})
export class ShortQuestionDetailPageModule {}
