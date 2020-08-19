import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortQuestionListingPageRoutingModule } from './short-question-listing-routing.module';

import { ShortQuestionListingPage } from './short-question-listing.page';
import { ShortQuestionListingComponent } from '../../components/shortquestions/listing/short-question-listing/short-question-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShortQuestionListingPageRoutingModule
  ],
  declarations: [ShortQuestionListingPage,ShortQuestionListingComponent]
})
export class ShortQuestionListingPageModule {}
