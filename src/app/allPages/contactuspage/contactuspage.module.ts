import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactuspagePageRoutingModule } from './contactuspage-routing.module';

import { ContactuspagePage } from './contactuspage.page';
import { ContactusComponent } from 'src/app/components/contactus/contactus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactuspagePageRoutingModule
  ],
  declarations: [ContactuspagePage, ContactusComponent]
})
export class ContactuspagePageModule {}
