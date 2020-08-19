import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyllabusDetailsPageRoutingModule } from './syllabus-details-routing.module';

import { SyllabusDetailsPage } from './syllabus-details.page';
import { SyllabusDetailsComponent } from '../../components/syllabus-details/syllabus-details.component';
import { SafePipe } from '../../allPipes/safe.pipe';


@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    SyllabusDetailsPageRoutingModule
  ],
  
  declarations: [SyllabusDetailsPage,SyllabusDetailsComponent,SafePipe]
})
export class SyllabusDetailsPageModule {}
