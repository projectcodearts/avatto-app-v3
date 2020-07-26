import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagenotfoundPageRoutingModule } from './pagenotfound-routing.module';

import { PagenotfoundPage } from './pagenotfound.page';
import { NotfoundComponent } from '../../components/notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagenotfoundPageRoutingModule
  ],
  declarations: [PagenotfoundPage, NotfoundComponent]
})
export class PagenotfoundPageModule {}
