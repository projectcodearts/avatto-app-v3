import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EligiblityPagePageRoutingModule } from './eligiblity-page-routing.module';

import { EligiblityPagePage } from './eligiblity-page.page';
import { AllEligiblityComponent } from '../../components/eligiblity/all-eligiblity/all-eligiblity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EligiblityPagePageRoutingModule
  ],
  declarations: [EligiblityPagePage, AllEligiblityComponent]
})
export class EligiblityPagePageModule {}
