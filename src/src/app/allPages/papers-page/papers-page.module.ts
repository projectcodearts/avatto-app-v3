import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapersPagePageRoutingModule } from './papers-page-routing.module';

import { PapersPagePage } from './papers-page.page';
import { AllPapersComponent } from '../../components/papers/all-papers/all-papers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapersPagePageRoutingModule
  ],
  declarations: [PapersPagePage, AllPapersComponent]
})
export class PapersPagePageModule {}
