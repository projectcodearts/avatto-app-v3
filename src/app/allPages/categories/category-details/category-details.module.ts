import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryDetailsPageRoutingModule } from './category-details-routing.module';

import { CategoryDetailsPage } from './category-details.page';
import { SubcategoryComponent } from 'src/app/components/allcategories/subcategory/subcategory.component';
import { PracticeQuestionService } from 'src/app/allServices/practice-question.service';
import { PracticeQuestionComponent } from 'src/app/components/practice-question/practice-question.component';
import { PracticeQuizComponent } from 'src/app/components/practice-quiz/practice-quiz.component';
import { PracticeQuizService } from 'src/app/allServices/practice-quiz.service';
import { ShortquestionsComponent } from 'src/app/components/shortquestions/shortquestions.component';
import { ShortitemComponent } from 'src/app/components/shortquestions/shortitem/shortitem.component';
import { MocktestTableComponent } from 'src/app/components/mocktest/mocktest-table/mocktest-table.component';
import { StudyMaterialTableComponent } from 'src/app/components/study-materials/study-material-table/study-material-table.component';
import { PapersTableComponent } from 'src/app/components/papers/papers-table/papers-table.component';
import { ShortQuestionsService } from 'src/app/allServices/short-questions.service';
import { DrescriptionComponent } from 'src/app/components/allcategories/subcategory/drescription/drescription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryDetailsPageRoutingModule
  ],
  declarations: [
    CategoryDetailsPage, 
    SubcategoryComponent, 
    PracticeQuestionComponent, 
    PracticeQuizComponent, 
    ShortquestionsComponent,
    ShortitemComponent, 
    MocktestTableComponent, 
    StudyMaterialTableComponent,
    PapersTableComponent,
    DrescriptionComponent
  ],
  providers: [PracticeQuestionService, PracticeQuizService, ShortQuestionsService]
})
export class CategoryDetailsPageModule {}
