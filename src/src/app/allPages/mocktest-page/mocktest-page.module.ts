import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MocktestPagePageRoutingModule } from './mocktest-page-routing.module';

import { MocktestPagePage } from './mocktest-page.page';
import { AllMocktestComponent } from '../../components/mocktest/all-mocktest/all-mocktest.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MocktestPagePageRoutingModule
  ],
  declarations: [MocktestPagePage, AllMocktestComponent]
})
export class MocktestPagePageModule {}
