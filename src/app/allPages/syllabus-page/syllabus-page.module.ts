import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyllabusPagePageRoutingModule } from './syllabus-page-routing.module';

import { SyllabusPagePage } from './syllabus-page.page';
import { AllsyllabusComponent } from '../../components/syllabus/allsyllabus/allsyllabus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SyllabusPagePageRoutingModule
  ],
  declarations: [SyllabusPagePage, AllsyllabusComponent]
})
export class SyllabusPagePageModule {}
