import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EligiblityPageDetailsPageRoutingModule } from './eligiblity-page-details-routing.module';

import { EligiblityPageDetailsPage } from './eligiblity-page-details.page';
import { EligiblityDetailsComponent } from 'src/app/components/eligiblity/eligiblity-details/eligiblity-details.component';
import { EligiblityDetailsService } from 'src/app/allServices/eligiblity-details.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EligiblityPageDetailsPageRoutingModule
  ],
  declarations: [EligiblityPageDetailsPage, EligiblityDetailsComponent],
  providers:[EligiblityDetailsService]
})
export class EligiblityPageDetailsPageModule {}
