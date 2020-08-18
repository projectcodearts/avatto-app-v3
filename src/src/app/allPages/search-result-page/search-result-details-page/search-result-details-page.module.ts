import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultDetailsPagePageRoutingModule } from './search-result-details-page-routing.module';

import { SearchResultDetailsPagePage } from './search-result-details-page.page';
import { SearchResultDetailsComponent } from 'src/app/components/search-result/search-result-details/search-result-details.component';
import { TextshortPipe } from 'src/app/allPipes/textshort.pipe';
import { SearchResultService } from 'src/app/allServices/search-result.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultDetailsPagePageRoutingModule
  ],
  declarations: [SearchResultDetailsPagePage, SearchResultDetailsComponent],
  providers: [SearchResultService, TextshortPipe]
})
export class SearchResultDetailsPagePageModule {}
