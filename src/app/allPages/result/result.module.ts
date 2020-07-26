import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';
import { ViewResultComponent } from '../../components/result/view-result/view-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultPageRoutingModule
  ],
  declarations: [ResultPage,ViewResultComponent]
})
export class ResultPageModule {}
