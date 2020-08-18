import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultPagePageRoutingModule } from './search-result-page-routing.module';

import { SearchResultPagePage } from './search-result-page.page';
import { SearchResultComponent } from 'src/app/components/search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultPagePageRoutingModule
  ],
  declarations: [SearchResultPagePage, SearchResultComponent]
})
export class SearchResultPagePageModule {}
