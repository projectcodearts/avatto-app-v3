import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { CategoryServicesService } from '../../allServices/category-services.service';
import { SyllabusComponent } from '../../components/syllabus/syllabus.component';
import { EligiblityComponent } from '../../components/eligiblity/eligiblity.component';
import { PapersComponent } from '../../components/papers/papers.component';
import { MocktestComponent } from '../../components/mocktest/mocktest.component';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { SyllabusService } from '../../allServices/syllabus.service';
import { PapersService } from '../../allServices/papers.service';
import { MocktestService } from '../../allServices/mocktest.service';
import { EligiblityService } from '../../allServices/eligiblity.service';
import { FeaturedCategoryComponent } from '../../components/featured-category/featured-category.component';
import { SharedModuleModule } from '../../sharedModule/shared-module/shared-module.module';
import { QuizserviceService } from '../../allServices/quizservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModuleModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    SearchbarComponent, 
    FeaturedCategoryComponent,
    SyllabusComponent,
    EligiblityComponent,
    PapersComponent,
    MocktestComponent,
    QuizComponent
  ],
  providers: [CategoryServicesService, SyllabusService, EligiblityService, PapersService, MocktestService, QuizserviceService],
})
export class HomePageModule {}
