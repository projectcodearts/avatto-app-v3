import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutusPagePageRoutingModule } from './aboutus-page-routing.module';

import { AboutusPagePage } from './aboutus-page.page';
import { AboutusComponent } from '../../components/aboutus/aboutus.component';
import { SharedModuleModule } from '../../sharedModule/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModuleModule,
    AboutusPagePageRoutingModule
  ],
  declarations: [AboutusPagePage, AboutusComponent]
})
export class AboutusPagePageModule {}
