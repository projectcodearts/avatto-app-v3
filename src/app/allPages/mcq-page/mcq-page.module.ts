import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McqPagePageRoutingModule } from './mcq-page-routing.module';

import { McqPagePage } from './mcq-page.page';
import { McqComponent } from '../../components/mcq/mcq.component';
import { McqItemComponent } from '../../components/mcq/mcq-item/mcq-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McqPagePageRoutingModule
  ],
  declarations: [McqPagePage, McqComponent, McqItemComponent]
})
export class McqPagePageModule {}
